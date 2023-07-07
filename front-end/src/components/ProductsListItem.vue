<template>
    <div class="product-container">
        <div class="product">
            <img :src="product.imageUrl">
            <div>
                <h3>{{ product.name }}</h3>
                <p>${{ product.price }}</p>
            </div>
        </div>
        <button class="remove">Remove From Cart</button>
    </div>
</template>

<script>
export default {
    name:'ProductsListItem',
    props:['product']
}
</script>

<style scoped>
     img{
        height: 100px;
        max-width: 100px;
        margin-right: 20px;
    }
    .product-container{
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
    }
    .remove{
        margin: 30px;
        width: 20%;
        font-size: 12px;
    }
    p{
        text-align: left;
    }
    .product {
        display: flex;
        justify-content: space-between;
        margin: 0%;
    }
    h3{
        margin-bottom: 15px;
    }
</style>