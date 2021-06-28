<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { refreshScale } from '@/assets/js/flexible-dashboard'
export default {
  name: 'app',
  mounted () {
    refreshScale();
    window.onresize = function () {
      refreshScale()
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 3280px;
  height: 2160px;
  font-family: 'PingFang SC';
  color: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
}
</style>
