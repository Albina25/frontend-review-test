<template>
  <div class="product-list">
    <div class="card" v-for="(product,index) in products" :key="product.id" :style="{width: cardsWidth + '%'}">
      <p class="card-title">{{ product.title }}</p>
      <img class="card-image"
        :src="product.image"
        :alt="product.title"
        onError="this.onerror=null;this.src='products/productPreview.jpg';"

      >
      <p class="card-price">{{ previewProductPrice(product) }}</p>

      <div>
        <input type="number" :ref="`product-${index}`">
        <span>кг</span>
      </div>

      <button @click="addToCart(product, index)">В корзину</button>
    </div>
  </div>
</template>

<script>
import {currency} from '../constants/global_constants.js';

export default {
  data() {
    return {
      cardsWidth: 1,
      amount: {},
    };
  },
  created() {
    this.startPricesMonitoring();
    this.calculateCardsWidth();
    window.addEventListener('resize', this.calculateCardsWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateCardsWidth);
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    calculateCardsWidth() {
      const width = window.innerWidth;
      let count = 1;
      if (width > 840) {
        count = 3;
      } else if ((width > 420 && width <= 840)) {
        count = 2;
      }
      this.cardsWidth = 100 / count;
    },
    startPricesMonitoring() {
      setInterval(this.getList, 2000);
    },
    async getList() {
      this.$store.dispatch('setProductsListAction');
    },
    previewProductPrice(product) {
      return `Цена: ${ product.price } ${ currency }`;
    },
    addToCart(product, index) {
      const amount = this.$refs[`product-${index}`][0].value;

      if (amount < 1) {
        return;
      }

      const dataForAddToCart = {
        amount,
        price: product.price,
        title: product.title,
      };

      this.$store.commit('addToCart', dataForAddToCart);
    },
  },
};
</script>

<style>
  .product-list {
    padding: 10px;
  }

  .card {
    display: inline-block;
    width: 100%;
    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
  }
  .card-image {
    width: 100%;
  }
  button {
    padding: 5px;
    margin: 5px;
  }

</style>
