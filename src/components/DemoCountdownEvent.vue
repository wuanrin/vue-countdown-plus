<template>
  <demo-block title="Countdown Events">
    <countdown-plus
      :time="5 * 1000"
      format="ss"
      @change="handleChange"
      @finish="handleFinish"
    />
    <source-code lang="xml" :code="templateCode" />
    <source-code lang="javascript" :code="scriptCode" />
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
    handleChange ({ currentTime, resolved, formatted }) {
      console.log(currentTime, resolved, formatted)
    },
    handleFinish () {
      console.log('finished')
    }
  }
}
</script>
