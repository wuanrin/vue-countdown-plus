<template>
  <demo-block title="Countdown Event">
    <countdown-plus
      :time="5 * 1000"
      format="ss"
      @change="handleChange"
      @finish="handleFinish"
    />
    <source-code>{{ templateCode }}</source-code>
    <source-code>{{ scriptCode }}</source-code>
  </demo-block>
</template>
<script>
export default {
  name: 'DemoCountdownEvent',
  data () {
    return {
      templateCode: `<countdown-plus
  :time="5 * 1000"
  format="ss"
  @change="handleChange"
  @finish="handleFinish"
/>`,
      scriptCode: `export default {
  methods: {
    handleChange (e) {
      console.log(e.formatted)
    },
    handleFinish () {
      console.log('finished')
    }
  }
}`
    }
  },
  methods: {
    handleChange (e) {
      console.log(e.formatted)
    },
    handleFinish () {
      console.log('finished')
    }
  }
}
</script>
