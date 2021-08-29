<template>
  <div class="demo-block">
    <h3 class="demo-block__title" v-if="title">{{ title }}</h3>
    <div class="demo-block__content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'DemoBlock',
  props: {
    title: String
  }
}
</script>
<style scoped>
.demo-block {
  margin: 40px 0;
}
.demo-block__title {
  margin: 0 0 20px;
  padding: 0;
  font-weight: normal;
  font-size: 22px;
}
</style>
