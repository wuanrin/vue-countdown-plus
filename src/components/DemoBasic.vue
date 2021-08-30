<template>
  <demo-block title="Basic Usage">
    <countdown-plus :time="30 * 60 * 60 * 1000" />
    <source-code lang="xml" :code="code" />
  </demo-block>
</template>
<script>
export default {
  name: 'DemoBasic',
  data () {
    return {
      code: '<countdown-plus :time="30 * 60 * 60 * 1000" />'
    }
  }
}
</script>
