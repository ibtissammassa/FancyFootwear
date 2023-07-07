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
                <button>Add to Cart</button>
                <span>Description</span>
                <p>{{ product.description }}</p>
            </div>
        </div>
    </div>
    <NotFound v-else/>
</template>

<script>
import { products } from '@/fake-data';
import NotFound from './NotFound.vue';

export default {
    name : 'ProductDetailPage',
    components: {NotFound},
    data(){
        return{
            product: products.find((p)=> p.id == this.$route.params.id),
        }
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
</style>