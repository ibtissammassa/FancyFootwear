<template>
    <div class="product-wraper">
        <img :src="product.imageUrl">
        <h3>{{ product.name }}</h3>
        <p>${{ product.price }}</p>
        <router-link :to="'/products/'+product.id">
          <button>View Details</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'ProductGridItem',
    props:['product']
}
</script>

<style scoped>
    h3,p{
    margin-bottom: 5%;
  }
  img {
    height: 200px;
    width: 200px;
  }
</style>