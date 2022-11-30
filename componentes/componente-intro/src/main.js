import Vue from 'vue'
import App from './App.vue'
import appContadores from './AppContadores.vue'

Vue.config.productionTip = false
Vue.component('app-contadores', appContadores)
new Vue({
  render: h => h(App),
}).$mount('#app')
