<template>
  <div class="product-wraper">
    <h1>Shopping Cart</h1>
    <hr>
    <Productslist :products="cartItems" @remove="RemoveItem($event)"/>       
    <span>Total: ${{ totalprice }}</span>
    <button class="checkout">Proceed to Checkout</button>
  </div>
</template>

<script>
import axios from 'axios';
import Productslist from '@/components/Productslist.vue';

export default {
    name :'CartPage',
    components: {Productslist},
    data(){
        return{
            cartItems:[],
        }
    },
    methods:{
        async RemoveItem(productId){
            const result = await axios.delete(`/api/users/1/cart/${productId}`);
            this.cartItems = result.data;
        }
    },
    computed:{
        totalprice(){
            return this.cartItems.reduce((sum,item)=> sum + Number(item.price),0);
        }
    },
    async created() {
      const result = await axios.get(`/api/users/1/cart`);
      this.cartItems = result.data;
    }
}
</script>

<style scoped>
    .product-wraper{
        margin: 2% 20% 2% 20%;
        position: relative;
    }
   
    span{
        font-weight: bolder;
        position: absolute;
        right: 80px;
        margin-top: 25px;
    }
    .checkout{
        margin-top: 65px;
    }
    h1{
        margin-bottom: 15px;
        text-align: left;
    }
</style>