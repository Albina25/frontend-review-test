<template>
  <div id="app">
    <header-total-price />
    <products-list />
    <products-cart />
  </div>
</template>

<script>
import HeaderTotalPrice from './components/HeaderTotalPrice.vue';
import ProductsList from './components/ProductsList.vue';
import ProductsCart from './components/ProductsCart.vue';

export default {
  name: 'App',
  components: {
    HeaderTotalPrice,
    ProductsList,
    ProductsCart,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
