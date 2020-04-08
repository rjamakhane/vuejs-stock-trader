import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource';

Vue.config.productionTip = false
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-8cb5a.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
