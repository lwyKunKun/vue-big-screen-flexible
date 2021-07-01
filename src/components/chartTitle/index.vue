
<!-- 图表标题 -->
<template>
  <div class="chart-title-container">
    <div class="icon">
      <img src="../../assets/img/组 66@2x.png" alt="" />
    </div>
    <div class="title">
      <div class="word">{{ title }}</div>
      <div class="bgc"></div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chartTitle',
  props: {
    title: {
      type: String,
      required: true
    },

  },
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
    text-align: center;
    line-height: 80px;
    z-index: 999;
  }
  .title {
    font-size: 36px;
    font-weight: 600;
    color: #239cff;
    .word {
      width: 100%;
      margin-left: 20px;
      line-height: 80px;
    }
    .bgc {
      width: 110%;
      height: 50px;
      margin-top: -54px;
      margin-left: -12px;
      background: linear-gradient(to bottom left, transparent 30%, #0d4991 100%);
    }
    .line {
      width: 110%;
      height: 4px;
      margin: -5px 0 0 -14px;
      background: linear-gradient(to right, #0d4991, transparent);
    }
  }
}
</style>