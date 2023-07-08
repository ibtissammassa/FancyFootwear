<template>
    <div class="grid-wraper">
      <ProductGridItem v-for="product in products" :key="product.id" :product="product"/>
    </div> 
</template>

<script>
import ProductGridItem from './ProductGridItem.vue';

export default {
    name:'ProductGrid',
    components: {ProductGridItem},
    props: ['products']
}
</script>

<style scoped>
.grid-wraper{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2%;
    margin: 25%;
    margin-top: 2%;
  }
</style>