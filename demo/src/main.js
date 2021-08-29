import Vue from 'vue'
import App from './App.vue'
import CountdownPlus from 'vue-countdown-plus'
import Button from './components/Button.vue'
import DemoBlock from './components/DemoBlock.vue'
import SourceCode from './components/SourceCode.vue'

Vue.component(CountdownPlus.name, CountdownPlus)
Vue.component(Button.name, Button)
Vue.component(DemoBlock.name, DemoBlock)
Vue.component(SourceCode.name, SourceCode)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
