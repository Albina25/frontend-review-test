import Vue from 'vue';
import Vuex from 'vuex';
import {getProductsList} from "../../api/products.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: [],
  },

  actions: {
    async setProductsListAction(ctx) {
      const res = await getProductsList();
      ctx.commit('setProducts', res);
    },
  },

  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    addToCart(state, data) {
      state.cart.push(data);
    },
  },

  getters: {
    reverseListCart(state) {
      return JSON.parse(JSON.stringify(state.cart)).reverse();
    },
    totalPrice(state) {
      const totalPrice = state.cart.reduce(
        (total, currentItem) => total + currentItem.price * currentItem.amount, 0);
      return totalPrice.toFixed(2);

    }
  }
});
