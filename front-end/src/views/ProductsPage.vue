<template>
  <ProductGrid :products="products"/>
</template>

<script>
import axios from 'axios'
import ProductGrid from '@/components/ProductGrid.vue';

export default {
    name: 'ProductsPage',
    components: {ProductGrid},
    data(){
      return {
        products: [],
      }
    },
    async created() {
      const result = await axios.get('/api/products');
      const products = result.data;
      this.products = products;
    }
}
</script>