<template>
  <div>
    <slot
      :countdown="currentTime"
      :resolved="resolved"
      :formatted="formatted"
    >{{ formatted }}</slot>
  </div>
</template>
<script>
import { resolveCountdown, formatCountdown } from './utils'

export default {
  name: 'CountdownPlus',
  emits: ['finish'],
  props: {
    // Countdown time. ms
    time: {
      type: Number,
      default: 0
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    autoStart: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentTime: 0,
      restTime: 0,
      now: 0,
      timer: 0,
      inCountdown: false
    }
  },
  computed: {
    stepInterval() {
      const { format } = this
      if (format.indexOf('s') > -1 || format.indexOf('S') > -1) {
        return 30
      }
      return 1000
    },
    resolved() {
      return resolveCountdown(this.currentTime, this.format)
    },
    formatted() {
      return formatCountdown(this.resolved, this.format)
    }
  },
  methods: {
    start() {
      if (this.inCountdown) {
        return
      }
      this.now = Date.now()
      this.restTime = this.currentTime
      window.clearInterval(this.timer)
      this.timer = window.setInterval(this._step, this.stepInterval)
      this.inCountdown = true
    },
    _step() {
      const { restTime, now } = this
      const interval = Date.now() - now
      if (restTime > interval) {
        this.currentTime = restTime - interval
      } else {
        this.currentTime = 0
        this.stop()
      }
    },
    stop() {
      this._doStop()
      this.$emit('finish')
    },
    reset() {
      this.currentTime = this.restTime = this.time
      this._doStop()
    },
    _doStop() {
      this.inCountdown = false
      window.clearInterval(this.timer)
    }
  },
  created() {
    this.currentTime = this.restTime = this.time
    if (this.autoStart) {
      this.start()
    }
  }
}
</script>
