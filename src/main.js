import Vue from 'vue'
import App from './App.vue'
import CountdownPlus from 'vue-countdown-plus'
import Button from './components/Button.vue'
import DemoBlock from './components/DemoBlock.vue'
import SourceCode from './components/SourceCode.vue'

// import hljs from 'highlight.js/lib/core'
// import javascript from 'highlight.js/lib/languages/javascript'
// // import vue from 'vue-highlight.js/lib/languages/vue'
// import hljsVuePlugin from "@highlightjs/vue-plugin"
// import 'highlight.js/styles/default.css'

// hljs.registerLanguage('javascript', javascript)
// // hljs.registerLanguage('vue', vue)
// Vue.use(hljsVuePlugin)

Vue.component(CountdownPlus.name, CountdownPlus)
Vue.component(Button.name, Button)
Vue.component(DemoBlock.name, DemoBlock)
Vue.component(SourceCode.name, SourceCode)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
