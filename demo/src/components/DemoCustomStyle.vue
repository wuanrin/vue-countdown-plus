<template>
  <div class="custom-style">
    <countdown-plus :time="time" :format="format">
      <template v-slot:default="{ resolved }">
        <span class="countdown-item">{{ resolved.HH }}</span>
        :
        <span class="countdown-item">{{ resolved.mm }}</span>
        :
        <span class="countdown-item">{{ resolved.ss }}</span>
      </template>
    </countdown-plus>
  </div>
</template>
<script>
export default {
  name: 'DemoCustomStyle',
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      format: 'HH:mm:ss'
    }
  }
}
</script>
<style>
.custom-style {
  font-size: 12px;
}
.countdown-item {
  padding: 3px 5px;
  border-radius: 3px;
  color: #fff;
  background-color: #c00;
}
</style>
