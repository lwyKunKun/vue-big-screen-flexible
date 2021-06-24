<!-- 首页 -->
<template>
  <div class="home-container">
    <div class="home-title"><span>桂林市退役军人就业创业服务平台</span></div>
    <wireframe :styleCss="styleCss">
      <homeHead></homeHead>
    </wireframe>
  </div>
</template>

<script>
export default {
  name: 'name',
  components: {},
  data () {
    return {
      styleCss: {
        height: '178',
        display: 'flex',
        'justify-ontent': 'space-around',
        'align-items': 'center',
      }
    };
  },

  mounted () { },

  computed: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.home-container {
  width: 100%;
  height: 100%;
  .home-title {
    width: 100%;
    height: 156px;
    background: linear-gradient(0deg, #044392, #00061b);
    opacity: 0.64;
    font-size: 66px;
    font-family: 'PingFang SC';
    font-weight: bold;
    color: #12bbfb;
    text-align: center;
    line-height: 156px;
    span {
      background: linear-gradient(0deg, #319df5 0.68359375%, #00ccff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0px 0px 6px rgba(20, 113, 193, 0.3);
    }
  }
}
</style>
