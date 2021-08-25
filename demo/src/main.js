import Vue from 'vue'
import App from './App.vue'
import CountdownPlus from 'vue-countdown-plus'

Vue.component('CountdownPlus', CountdownPlus)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
