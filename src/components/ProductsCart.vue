<template>
  <div class="cart-list">
    <h4 v-if="productsInCart.length > 0">Cписок продуктов: </h4>
    <ul>
      <li v-for="item in productsInCart" :key="item.id">
        {{ getSummaryProduct(item) }}
      </li>
    </ul>
  </div>
</template>

<script>
import {currency} from '../constants/global_constants.js';

export default {
  computed: {
    productsInCart() {
      return this.$store.getters.reverseListCart;
    },
  },
  methods: {
    getSummaryProduct(item) {
      return `${ item.title } - ${ item.price } ${ currency } - ${ item.amount }кг.`;
    }
  },

};
</script>

<style>

</style>
