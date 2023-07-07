<template>
  <div class="product-wraper">
    <h1>Shopping Cart</h1>
    <hr>
    <Productslist :products="cartItems"/>       
    <span>Total: ${{ totalprice }}</span>
    <button class="checkout">Proceed to Checkout</button>
  </div>
</template>

<script>
import { cartItems } from '@/fake-data';
import Productslist from '@/components/Productslist.vue';

export default {
    name :'CartPage',
    components: {Productslist},
    data(){
        return{
            cartItems,
        }
    },
    computed:{
        totalprice(){
            return this.cartItems.reduce((sum,item)=> sum + Number(item.price),0);
        }
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