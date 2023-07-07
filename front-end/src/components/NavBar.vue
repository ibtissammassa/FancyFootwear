<template>
  <div class="nav-bar">
    <router-link :to="{ name:'products' }" class="title">
        <h1>FANCY FOOTWEAR</h1>
    </router-link>
    <router-link :to="{ name: 'cart' }">
        <button class="cart">Shopping Cart</button>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
.nav-bar {
    border-bottom: 1px solid #ddd;
    height: 80px;
    width: 100%;
    display: flex;
    background-color: white;
    box-shadow: 0px 2px 5px #888;
}
.cart{
    width: 25%;
    font-size: 14px;
    margin-right: -155px;
}
.title{
    text-decoration: none;
}
</style>