<template>
  <demo-block title="Second Countdown">
    <Button
      class="countdown-button"
      :disabled="inCountdown"
      @click="handleClick"
    >
      <template v-if="!inCountdown">Start</template>
      <countdown-plus
        v-else
        ref="countdown"
        :time="60 * 1000"
        :auto-start="false"
        format="ss"
        @finish="inCountdown = false"
      >
        <template v-slot="{ formatted }">{{ formatted }}s</template>
      </countdown-plus>
    </Button>
    <source-code lang="xml" :code="templateCode" />
    <source-code lang="javascript" :code="scriptCode" />
  </demo-block>
</template>
<script>
const templateCode = `<Button
  class="countdown-button"
  :disabled="inCountdown"
  @click="handleClick"
>
  <template v-if="!inCountdown">Start</template>
  <countdown-plus
    v-else
    ref="countdown"
    :time="60 * 1000"
    :auto-start="false"
    format="ss"
    @finish="inCountdown = false"
  >
    <template v-slot="{ formatted }">{{ formatted }}s</template>
  </countdown-plus>
</Button>`
const scriptCode = `export default {
  data () {
    return {
      inCountdown: false
    }
  },
  methods: {
    handleClick() {
      this.inCountdown = true
      this.$nextTick(() => {
        const { countdown } = this.$refs
        countdown.reset()
        countdown.start()
      })
    }
  }
}`

export default {
  name: 'DemoSecondCountdown',
  data () {
    return {
      inCountdown: false,
      templateCode,
      scriptCode
    }
  },
  methods: {
    handleClick() {
      this.inCountdown = true
      this.$nextTick(() => {
        const { countdown } = this.$refs
        countdown.reset()
        countdown.start()
      })
    }
  }
}
</script>
<style>
.countdown-button {
  width: 60px;
}
</style>
