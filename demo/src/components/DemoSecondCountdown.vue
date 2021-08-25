<template>
  <div>
    <countdown-plus :time="time" :format="format" />
  </div>
</template>
<script>
export default {
  name: 'DemoSecondCountdown',
  data() {
    return {
      time: 120 * 1000,
      format: 'ss'
    }
  }
}
</script>
