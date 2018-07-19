import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import App from './App';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


