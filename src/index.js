import { resolveCountdown, formatCountdown } from './utils'

export default {
  name: 'CountdownPlus',
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
      resolved: {},
      now: 0,
      timer: 0,
      inCountdown: false
    }
  },
  computed: {
    stepInterval() {
      return /s/i.test(this.format) ? 30 : 1000
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
      const { restTime, now, format, formatted } = this
      const interval = Date.now() - now
      const target = (
        restTime > interval
          ? restTime - interval
          : 0
      )
      const thisResolved = resolveCountdown(target, format)
      const thisFormatted = formatCountdown(thisResolved, format)
      if (thisFormatted !== formatted) {
        this.$emit('change', {
          currentTime: target,
          resolved: thisResolved,
          formatted: thisFormatted
        })
        this.resolved = thisResolved
      }
      this.currentTime = target
      if (restTime <= interval) {
        this.stop()
      }
    },
    stop() {
      this._doStop()
      this.$emit('finish')
    },
    reset() {
      this.currentTime = this.restTime = this.time
      this.resolved = resolveCountdown(this.currentTime, this.format)
      this._doStop()
    },
    _doStop() {
      this.inCountdown = false
      window.clearInterval(this.timer)
    }
  },
  created() {
    this.currentTime = this.restTime = this.time
    this.resolved = resolveCountdown(this.currentTime, this.format)
    if (this.autoStart) {
      this.start()
    }
  },
  render(h) {
    const {
      currentTime,
      resolved,
      formatted
    } = this
    return h(
      'span',
      [
        this.$scopedSlots.default
          ? this.$scopedSlots.default({
              currentTime,
              resolved,
              formatted
            })
          : this.formatted
      ]
    )
  }
}
