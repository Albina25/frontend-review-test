<template>
  <div class="header">
    <h3>{{ previewTotalPrice }}</h3>
  </div>
</template>

<script>
import {currency} from '../constants/global_constants.js';

export default {
  name: 'Header',
  computed: {
    cartPrice() {
      return this.$store.getters.totalPrice;
    },
    previewTotalPrice() {
      return `Товаров в корзине на: ${ this.cartPrice } ${ currency }`;
    }
  },
}
</script>

<style scoped>
  .header {
    padding: 10px;
    background: #e5e5e5;
  }
</style>
