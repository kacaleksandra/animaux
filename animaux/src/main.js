import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './routes';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({  
  routes: Routes,
  mode: 'history'
});


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
