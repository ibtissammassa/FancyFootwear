<template>
  <div id="app">
      <NavBar/>
      <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default{
  name:'App',
  components: { NavBar},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
    box-sizing: border-box;
    color: black;
    margin: auto;
  }
body{
  background-color: #e4e4e3;
}
.product-wraper{
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  padding: 30px;
}
a {
    width: 100%;
}
button {
  width: 100%;
  background-color:black;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  outline: 0;
  padding: 16px;
}
button:hover{
  background-color: #161f1a;
}
</style>
