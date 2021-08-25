<template>
  <div>
    <countdown-plus :time="time" />
  </div>
</template>
<script>
export default {
  name: 'DemoBasic',
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    }
  }
}
</script>
