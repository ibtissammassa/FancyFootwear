<template>
  <ProductGrid :products="products"/>
</template>

<script>
import { products } from '@/fake-data';
import ProductGrid from '@/components/ProductGrid.vue';

export default {
    name: 'ProductsPage',
    components: {ProductGrid},
    data(){
      return {
        products
      }
    }
}
</script>