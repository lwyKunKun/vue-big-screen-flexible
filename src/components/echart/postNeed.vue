<!-- 职位需求人数TOP10图表 -->
<template>
  <div id="postNeed" class="chartInit"></div>
</template>

<script>
export default {
  name: 'postNeed',
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
      let myChart = this.$echarts.init(document.getElementById('postNeed'))
      this.chart = myChart
      let option = {
        grid: {
          right: this.$fontSize(50),
          left: this.$fontSize(20),
          bottom: this.$fontSize(50),
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          splitLine: {//网格线
            show: true,
            lineStyle: {//使用深浅的间隔色
              color: 'rgba(17, 108, 183, 0.3)'
            }
          },
          axisTick: {
            show: false,
          },
          axisLine: {//Y轴线的样式
            show: true,
            lineStyle: {
              type: 'solid',
              color: 'rgba(49, 157, 246, 0.3)',//左边线的颜色
              width: this.$fontSize(1)//坐标线的宽度
            }
          },
          axisLabel: {//X轴文字的样式
            textStyle: {
              color: '#fff',
              fontSize: this.$fontSize(24)
            }
          },

        },
        yAxis: {
          type: 'category',
          axisLabel: {//Y轴文字的样式
            textStyle: {
              color: '#fff',
              fontSize: this.$fontSize(24),
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {//Y轴线的样式
            lineStyle: {
              type: 'solid',
              color: 'rgba(49, 157, 246, 0.3)',//左边线的颜色
              width: this.$fontSize(1)//坐标线的宽度
            }
          },
          data: ['生产制造/工厂管理类', '技工类', '财务/税务/审计/统计类', '文教/科研类', '行政/文职/后勤类', '市场/营销/策划/推广类', '客服/技术支持类', '房地产开发/经纪/中介', '建筑/工程类', '销售']
        },
        series: [
          {
            name: '',
            type: 'bar',
            itemStyle: {
              //渐变色在下面修改，这里是透明度
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{ offset: 0, color: '#15999C' }, { offset: 1, color: '#57F873' }]),
              //   emphasis: {//鼠标悬停
              //     color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{ offset: 0, color: '#596BFF' }, { offset: 1, color: '#B83EE1' }]),
              //   }
            },
            label: {
              emphasis: {
                show: true,
                //数据在柱子头部加载
                position: 'insideRight',
                textStyle: {
                  color: '#fff',
                  fontSize: this.$fontSize(24),
                }

              },


            },

            data: [1000, 588, 1800, 2200, 2895, 599, 2600, 1000, 2798, 2900]
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