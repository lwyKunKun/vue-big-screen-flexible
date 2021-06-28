<!-- 图表标题 -->
<template>
  <div class="chart-title-container">
    <div class="icon">图片</div>
    <div class="title">
      <div class="word">行业30天投递人数</div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chartTitle',
  components: {},

  data () {
    return {
    };
  },

  mounted () { },

  computed: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.chart-title-container {
  width: 100%;
  display: flex;
  padding: 48px 0 0 30px;
  .icon {
    width: 80px;
    height: 80px;
    border: 1px solid #00519c;
    box-shadow: 0px 0px 3px 0px rgba(0, 234, 255, 0.51);
    border-radius: 50%;
    text-align: center;
    line-height: 80px;
  }
  .title {
    width: 470px;
    font-size: 36px;
    font-weight: 600;
    color: #239cff;

    .word {
      margin-left: 20px;
      line-height: 80px;
    }
    .line {
      height: 4px;
      background: #0d4991;
      margin: -5px 0 0 -22px;
    }
  }
}
</style>