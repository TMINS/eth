import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./util/scrollreveal";
import "lib-flexible";
import VueTouch from 'vue-touch'
// import "swiper/dist/css/swiper-bundle.min.css";
Vue.config.productionTip = false;
Vue.use(VueTouch, { anme: 'v-touch' })
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
