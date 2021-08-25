<template>
  <div>
    <countdown-plus ref="countdown" :time="time" :auto-start="false" />
    <div class="control-buttons">
      <button @click="start">Start</button>
      <button @click="pause">Pause</button>
      <button @click="reset">Reset</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DemoMasualControl',
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    }
  },
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
}
</script>
<style>
.control-buttons {
  margin-top: 10px;
}

.control-buttons button {
  height: 26px;
  margin-right: 10px;
  padding: 0 10px;
  border: none;
  border-radius: 3px;
  font-size: 13px;
  color: #fff;
  background-color: #4395ff;
}
</style>
