<template>
  <div class="page">
    <h2 class="page-title">VueCountdownPlus Demo</h2>
    <div class="demo-item">
      <h3 class="demo-title">Basic Usage</h3>
      <div class="demo-content">
        <demo-basic />
      </div>
    </div>

    <div class="demo-item">
      <h3 class="demo-title">Custom Format</h3>
      <div class="demo-content">
        <demo-custom-format />
      </div>
    </div>

    <div class="demo-item">
      <h3 class="demo-title">Custom Style</h3>
      <div class="demo-content">
        <demo-custom-style />
      </div>
    </div>

    <div class="demo-item">
      <h3 class="demo-title">Masual Control</h3>
      <div class="demo-content">
        <demo-masual-control />
      </div>
    </div>

    <div class="demo-item">
      <h3 class="demo-title">Second Countdown</h3>
      <div class="demo-content">
        <demo-second-countdown />
      </div>
    </div>
  </div>
</template>
<script>
import DemoBasic from './DemoBasic.vue'
import DemoCustomFormat from './DemoCustomFormat.vue'
import DemoCustomStyle from './DemoCustomStyle.vue'
import DemoMasualControl from './DemoMasualControl.vue'
import DemoSecondCountdown from './DemoSecondCountdown.vue'

export default {
  name: 'CountdownDemo',
  components: {
    DemoBasic,
    DemoCustomFormat,
    DemoCustomStyle,
    DemoMasualControl,
    DemoSecondCountdown
  }
}
</script>
<style>
.page {
  width: 600px;
  margin: auto;
}
.page-title {
  margin-bottom: 30px;
  font-size: 24px;
}

.demo-item + .demo-item {
  margin-top: 40px;
}

.demo-title {
  margin: 0 0 10px 20px;
  padding: 0;
  font-size: 18px;
  font-weight: normal;
}

.demo-content {
  padding: 20px;
  border-radius: 8px;
  background-color: #f3f3f3;
}
</style>
