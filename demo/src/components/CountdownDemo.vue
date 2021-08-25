<template>
  <div>
    <countdown-plus
      ref="countdown"
      format="SS"
      :time="6 * 1000"
      @finish="handleFinish"
    />
    <button @click="handleClick">
      {{ inCountdown ? '暂停' : '开始' }}
    </button>
  </div>
</template>
<script>
// import CountdownPlus from 'vue-countdown-plus'
import CountdownPlus from './CountdownPlus.vue'

export default {
  name: 'CountdownDemo',
  components: { CountdownPlus },
  data() {
    return {
      inCountdown: false
    }
  },
  methods: {
    handleClick() {
      const { start, stop, inCountdown } = this.$refs.countdown
      this.inCountdown = inCountdown
      console.log('incountdown', this.inCountdown)
      if (inCountdown) {
        stop()
      } else {
        start()
      }
    },
    handleFinish() {
      console.log('Finish!!')
    }
  }
}
</script>
