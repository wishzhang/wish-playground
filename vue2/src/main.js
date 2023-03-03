import Vue from 'vue'
import App from './App.vue'
import {initEventHub} from '@/util';

Vue.config.productionTip = false

initEventHub()

new Vue({
  render: h => h(App),
}).$mount('#app')
