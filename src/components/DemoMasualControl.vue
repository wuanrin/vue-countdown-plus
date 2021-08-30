<template>
  <demo-block title="Masual Control">
    <countdown-plus
      ref="countdown"
      :time="30 * 60 * 60 * 1000"
      :auto-start="false"
    />
    <div class="control-buttons">
      <Button @click="start">Start</Button>
      <Button @click="pause">Pause</Button>
      <Button @click="reset">Reset</Button>
    </div>
    <source-code lang="xml" :code="templateCode" />
    <source-code lang="javascript" :code="scriptCode" />
  </demo-block>
</template>
<script>
const templateCode = `<countdown-plus
  ref="countdown"
  :time="30 * 60 * 60 * 1000"
  :auto-start="false"
/>
<div class="control-buttons">
  <Button @click="start">Start</Button>
  <Button @click="pause">Pause</Button>
  <Button @click="reset">Reset</Button>
</div>`

const scriptCode = `export default {
  methods: {
    start() {
      this.$refs.countdown.start()
    },
    pause() {
      this.$refs.countdown.stop()
    },
    reset() {
      this.$refs.countdown.reset()
    }
  }
}`

export default {
  name: 'DemoMasualControl',
  data() {
    return {
      templateCode,
      scriptCode
    }
  },
  methods: {
    start() {
      console.log('start')
      this.$refs.countdown.start()
    },
    pause() {
      this.$refs.countdown.stop()
    },
    reset() {
      this.$refs.countdown.reset()
    }
  }
}
</script>
<style>
.control-buttons {
  margin-top: 10px;
}

.control-buttons button {
  margin-right: 10px;
}
</style>
