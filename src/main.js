import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import './Theme/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  delay: 200,
  duration: 600
});



Vue.config.productionTip = false

Vue.use(VueRouter)


new Vue({
  render: h => h(App),
}).$mount('#app')
