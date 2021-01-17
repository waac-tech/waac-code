import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/vuesax.js'

Vue.config.productionTip = false
Vue.use(Vuesax);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
