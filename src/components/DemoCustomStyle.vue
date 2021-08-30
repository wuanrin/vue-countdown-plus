<template>
  <demo-block title="Custom Style">
    <countdown-plus
      :time="30 * 60 * 60 * 1000"
      format="HH:mm:ss"
    >
      <template v-slot="{ resolved }">
        <span class="countdown-item">{{ resolved.HH }}</span> :
        <span class="countdown-item">{{ resolved.mm }}</span> :
        <span class="countdown-item">{{ resolved.ss }}</span>
      </template>
    </countdown-plus>
    <source-code lang="xml" :code="code" />
  </demo-block>
</template>
<script>
export default {
  name: 'DemoCustomStyle',
  data () {
    return {
      code: `<template>
  <countdown-plus :time="30 * 60 * 60 * 1000" format="HH:mm:ss">
    <template v-slot="{ resolved }">
      <span class="countdown-item">{{ resolved.HH }}</span> :
      <span class="countdown-item">{{ resolved.mm }}</span> :
      <span class="countdown-item">{{ resolved.ss }}</span>
    </template>
  </countdown-plus>
</template>
<style>
.countdown-item {
  padding: 3px 6px;
  border-radius: 3px;
  color: #fff;
  background-color: #c00;
}
</style>`
    }
  }
}
</script>
<style>
.countdown-item {
  padding: 3px 6px;
  border-radius: 3px;
  color: #fff;
  background-color: #c00;
}
</style>
