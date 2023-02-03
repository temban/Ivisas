import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue } from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import Carousel3d from 'vue-carousel-3d';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';
// Custom Css
import "@/assets/scss/style.scss";
import "@/assets/scss/main.scss";
import EventBus from './EventBus'
import VueHtml2pdf from 'vue-html2pdf'





Vue.use(VueHtml2pdf)


Vue.prototype.$bus = EventBus;
Vue.prototype.$url = "http://192.168.43.7:3000"


Vue.use(axios);
Vue.use(Carousel3d);
Vue.use(BootstrapVue);
Vue.use(Vuelidate);

Vue.config.productionTip = false;


// Filter
// Capitilazes the first chars in words
Vue.filter("capitalize", (val) => {
  if(!val) {
    return "";
  }
  return val.toString().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
})

// Capitilazes the first chars in words
Vue.filter("prefix", (val) => {
  if(!val) {
    return "";
  }
  return `Mr. ${val}`;
})

// Parse date into local string
Vue.filter("parseDate", (val) => {
  if(!val) {
    return "";
  }
  return val.toLocaleString("en-US", { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' });
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
