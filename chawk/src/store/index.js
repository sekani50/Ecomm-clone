/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    chosenProduct: [],
    numberOfChosenProduct: 0,
    total: 0,
    cartclick: false,
    searchclick:false,
    backgclick:false,
  },

  actions: {
    getProductInfo({ commit }, product) {
      commit("UPDATE_PRODUCT_INFO", product);
    },
    getProductCount({ commit }, cnt) {
      commit("UPDATE_PRODUCT_COUNT", cnt);
    },
    getNumOfSelectedItem({ commit }, update) {
      commit("UPDATE_COUNT", update);
    },
    removeAProduct({ commit }, idx) {
      commit("REMOVE_A_PRODUCT", idx);
    },
    cartClick({commit},bool) {
      commit("CART_CLICK", bool);
    },
    searchClick({commit},bool) {
      commit("SEARCH_CLICK", bool);
    },
    backgClick({commit},bool) {
      commit("BACKG_CLICK", bool);
    }

  },
  mutations: {
    UPDATE_PRODUCT_INFO(state, product) {
      state.chosenProduct.push(product);
      const nonReuseable = [];
      const oneUsage = [];
      if (state.chosenProduct.length >= 1) {
        state.chosenProduct.forEach((item, index) => {
          nonReuseable.push(item.productSalePrice);
          oneUsage.push(item.productCount);
        });
        state.total = nonReuseable.reduce((a, b) => a + b, 0).toFixed();
        state.numberOfChosenProduct = oneUsage.reduce((a, b) => a + b, 0);
      } else {
        state.total = state.chosenProduct[0].productSalePrice.toFixed();
        state.numberOfChosenProduct =
          state.chosenProduct[0].productCount.toFixed();
      }

      console.log(state.total);
    },
    UPDATE_PRODUCT_COUNT(state, cnt) {
      //console.log(cnt);
      //state.numberOfChosenProduct = state.numberOfChosenProduct + cnt;
    },
    UPDATE_COUNT(state, update) {
      console.log(update);
      const nonReuseable = [];
      const oneUsage = [];
      state.chosenProduct.forEach((prod, index) => {
        if (update.index == index) {
          prod.productCount = update.count;
          prod.productSalePrice = update.price;
        }
        nonReuseable.push(prod.productSalePrice);
        oneUsage.push(prod.productCount);
      });
      state.total = nonReuseable.reduce((a, b) => a + b, 0).toFixed();
      state.numberOfChosenProduct = oneUsage.reduce((a, b) => a + b, 0);
      console.log(state.total);
    },
    REMOVE_A_PRODUCT(state, idx) {
      state.chosenProduct.splice(idx, 1);
      const nonReuseable = [];
      const oneUsage = [];
      if (state.chosenProduct.length >= 1) {
        state.chosenProduct.forEach((item, index) => {
          nonReuseable.push(item.productSalePrice);
          oneUsage.push(item.productCount);
        });
        state.total = nonReuseable.reduce((a, b) => a + b, 0).toFixed();
        state.numberOfChosenProduct = oneUsage.reduce((a, b) => a + b, 0);
      } else {
        state.total = 0;
        state.numberOfChosenProduct = 0;
      }

      console.log(state.total);
    },
    CART_CLICK(state,bool) {
        state.cartclick = !bool;
      
    },
    SEARCH_CLICK(state,bool) {
      state.searchclick = !bool
    
    },
    BACKG_CLICK(state,bool) {
      state.backgclick = !bool;
   
    }
  },
  getters: {
    showProducts: (state) => state.chosenProduct,
    displayNumber: (state) => state.numberOfChosenProduct,
    updateTotal: (state) => state.total,
    getCart: (state) => state.cartclick,
    getSearch: (state) => state.searchclick,
    getBackg: (state) => state.backgclick,

  },
  modules: {},
});
