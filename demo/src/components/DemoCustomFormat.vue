<template>
  <demo-block title="Custom Format">
    <countdown-plus
      :time="30 * 60 * 60 * 1000"
      format="DD ~Day, HH:mm:ss"
    />
    <source-code>{{ code }}</source-code>
  </demo-block>
</template>
<script>
export default {
  name: 'DemoCustomFormat',
  data () {
    return {
      code: `<countdown-plus
  :time="30 * 60 * 60 * 1000"
  format="DD ~Day, HH:mm:ss"
/>`
    }
  }
}
</script>
