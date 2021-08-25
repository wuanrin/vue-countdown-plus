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
const units = [
  { symbol: 'D', value: 24 * 60 * 60 * 1000 },
  { symbol: 'H', value: 60 * 60 * 1000 },
  { symbol: 'm', value: 60 * 1000 },
  { symbol: 's', value: 1000 },
  { symbol: 'S', value: 100 }
]

// Decompose time into time units
function resolveCountdown(countdown, format = 'HH:mm:ss') {
  const res = {}
  const thisUnits = units.filter(unit => format.indexOf(unit.symbol) > -1)
  for (let i = 0, l = thisUnits.length; i < l; i++) {
    const { symbol, value } = thisUnits[i]

    // Use ceil method for the smallest unit
    const unitValue = (
      l === 1
        ? Math.ceil(countdown / value)
        : Math.floor(countdown / value)
    )
    res[symbol] = unitValue
    res[symbol + symbol] = unitValue < 10 ? `0${unitValue}` : unitValue
    countdown %= value
  }
  return res
}

// Format countdown
function formatCountdown(countdown, format = 'HH:mm:ss') {
  // Check if resolved
  const time = (
    typeof countdown === 'number'
      ? resolveCountdown(countdown, format)
      : countdown
  )

  // Sort the keys from long to short to replace long placeholders first
  // to prevent long placeholders from being replaced by short ones
  const keys = Object.keys(time).sort((a, b) => b.length - a.length)
  let rs = format
  keys.forEach(key => {
    const regex = new RegExp(key, 'g')
    rs = rs.replace(regex, time[key])
  })
  return rs
}

export default {
  name: 'CountdownPlus',
  emits: ['finish'],
  props: {
    // Countdown time. ms
    time: {
      type: Number,
      default: 60000
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
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
  }
}
</script>
