<template>
  <code class="code">
    <pre><slot /></pre>
  </code>
</template>
<script lang="ts">
export default {
  name: 'SourceCode'
}
</script>
<style scoped>
.code {
  display: block;
  margin-top: 20px;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: #f3f3f3;
}
.code pre {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}
</style>
