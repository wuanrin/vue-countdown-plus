<template>
  <pre class="source-code"><code ref="code" :class="`language-${lang}`" v-html="html" /></pre>
</template>
<script>
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/docco.css'
// import 'highlight.js/styles/lightfair.css'
// import 'highlight.js/styles/stackoverflow-light.css'
// import 'highlight.js/styles/vs.css'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)

export default {
  name: 'SourceCode',
  props: {
    lang: String,
    code: String
  },
  data() {
    return {
      html: ''
    }
  },
  mounted() {
    this.html = hljs.highlight(this.code, { language: this.lang }).value
  }
}
</script>
<style scoped>
.source-code {
  display: block;
  margin-top: 20px;
  padding: 16px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.45;
  background-color: #f6f8fa;
}
.source-code code {
  font-family: 'Courier New';

}
</style>
