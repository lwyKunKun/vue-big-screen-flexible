<!-- 求职者学历占比图表 -->
<template>
  <div id="educationEchart" class="chartInit"></div>
</template>

<script>
export default {
  name: 'educationEchart',
  components: {},

  data () {
    return {
      chart: ''
    };
  },

  mounted () {
    this.init()
    this.$resize(this.init, this.chart)
  },

  computed: {},

  methods: {
    init () {
      let myChart = this.$echarts.init(document.getElementById('educationEchart'))
      this.chart = myChart
      let option = {
        grid: {
          //   right: this.$fontSize(50),
          //   left: this.$fontSize(20),
          //   bottom: this.$fontSize(50),
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          splitLine: {//去除网格线
            show: false
          },
          axisTick: {
            show: true,
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
              fontSize: this.$fontSize(26)
            },
          },
          axisLine: {//Y轴线的样式
            show: false,
            lineStyle: {
              type: 'solid',
              color: 'rgba(49, 157, 246, 0.3)',//左边线的颜色
              width: this.$fontSize(1)//坐标线的宽度
            }
          },
          data: ['硕士', '本科', '大专', '中专', '高中', '初中及以下']
        },
        series: [
          {
            name: '',
            type: 'bar',
            itemStyle: {
              //渐变色在下面修改，这里是透明度
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{ offset: 0, color: '#2755FF' }, { offset: 1, color: '#00AEFF' }]),
              emphasis: {//鼠标悬停
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{ offset: 0, color: '#AB3661' }, { offset: 1, color: '#FF5E1F' }]),
              }
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

            data: [10, 20, 100, 150, 200, 250, 400, 567, 923, 600, 456, 789, 345, 678, 567, 876, 906, 123, 712, 546]
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