<template>
  <div>
    <countdown-plus :time="time" :format="format" />
  </div>
</template>
<script>
export default {
  name: 'DemoCustomFormat',
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      format: 'DD ~Day, HH:mm:ss'
    }
  }
}
</script>
