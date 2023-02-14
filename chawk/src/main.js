/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import "./assets/styles.css";
import axios from "axios";
import VueAxios from "vue-axios";
import Vue2Filters from "vue2-filters";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";

Vue.use(VueAxios, axios);
Vue.use(Vue2Filters);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
