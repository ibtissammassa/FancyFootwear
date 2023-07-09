<template>
    <div v-if="product">
        <div class="product-wraper">
            <img :src="product.imageUrl">
            <div class="details">
                <div class="name-price">
                    <h1>{{ product.name }}</h1>
                    <h2>${{ product.price }}</h2>
                </div>
                <p>Average rating: {{ product.averageRating }}</p>
                <button @click="AddToCart" v-if="!SuccessMessage && !alreadyInCart">Add to Cart</button>
                <button class="addedtoCart" v-if="SuccessMessage">Added Successfully!</button>
                <button class="alreadyInCart" v-if="alreadyInCart">Already in Cart !</button>
                <span>Description</span>
                <p>{{ product.description }}</p>
            </div>
        </div>
    </div>
    <NotFound v-else/>
</template>

<script>
import axios from 'axios'
import NotFound from './NotFound.vue';

export default {
    name : 'ProductDetailPage',
    components: {NotFound},
    data(){
        return{
            product: {},
            cartItems:[],
            SuccessMessage: false
        }
    },
    methods: {
        async AddToCart(){
            const result = await axios.post(`/api/users/1/cart`,{
          productId: this.$route.params.id,
        });
        this.SuccessMessage = true;
        setTimeout(() => {
            this.$router.push('/products');
        }, 1200);
        }
    },
    computed:{
        alreadyInCart(){
            return this.cartItems.some(item => item.id === this.product.id)
        }
    },
    async created(){
        const resultproduct = await axios.get(`/api/products/${this.$route.params.id}`);
        const product = resultproduct.data;
        this.product = product;

        const resultcart = await axios.get(`/api/users/1/cart`);
        this.cartItems = resultcart.data;
    }
}
</script>

<style scoped>
    .product-wraper{
        margin: 2% 20% 2% 20%;
    }
    img{
        width: 350px;
    }
    .details {
        padding: 16px;
        padding-top: 0%;
        position: relative;
    }
    .name-price{
        display: flex;
        justify-content: space-between;
        margin-bottom: -15px;
    }
    span{
        margin-top: 72px;
        position: absolute;
        left: 16px;
        font-weight: 900;
    }
    p{
        line-height: 25px;
        margin-top: 35px;
        margin-bottom: 15px;
        text-align: left;
    }
    button{
        margin-bottom: 16px;
    }
    h1,h2{
        margin: 0%;
    }
    .addedtoCart{
        background-color: green;
    }
    .alreadyInCart{
        background-color: #888;
        cursor: auto;
    }
</style>