<!-- 新增职位平均薪酬TOP10图表 -->
<template>
  <div id="newPostMoney" class="chartInit"></div>
</template>

<script>
export default {
  name: 'newPostMoney',
  components: {},

  data () {
    return {
      chart: '',
    };
  },

  mounted () {
    this.init()
    this.$resize(this.init, this.chart)
  },

  computed: {},

  methods: {
    init () {
      let myChart = this.$echarts.init(document.getElementById('newPostMoney'))
      this.chart = myChart
      let option = {
        grid: {
          right: this.$fontSize(90),
          left: this.$fontSize(10),
          bottom: this.$fontSize(50),
          containLabel: true,
        },
        xAxis: {
          show: false

        },
        yAxis: {
          type: 'category',
          axisLabel: {//Y轴文字的样式
            textStyle: {
              color: '#fff',
              fontSize: this.$fontSize(26),
            },
          },
          axisLine: {//Y轴线的样式
            lineStyle: {
              type: 'solid',
              color: 'rgba(49, 157, 246, 0.3)',//左边线的颜色
              width: this.$fontSize(1)//坐标线的宽度
            }
          },
          axisTick: {
            show: false,
          },
          data: ['中介服务', '计算机硬件', '房地产/建材/工程', '保险', '计算机软件', '跨领域经营', '信托/担保/拍卖/典当', '通信/电信运营', '基金/证券/期货/投资', '通信/电信/网络设备']
        },
        series: [
          {
            name: '',
            type: 'bar',
            itemStyle: {
              //渐变色在下面修改，这里是透明度
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{ offset: 0, color: '#278AFF' }, { offset: 1, color: '#00FFFF' }]),
            },
            label: {
              show: true,
              position: 'right',
              textStyle: {
                color: '#2396FF',
                fontSize: this.$fontSize(26),
              },
              formatter: (parmas) => {
                return `${parmas.data}元`
              },


            },

            data: [7490, 9495, 9601, 9698, 9731, 9823, 9858, 10447, 10846, 11732]
          },
        ]
      };
      myChart.setOption(option)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>