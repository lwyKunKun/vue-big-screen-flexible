<!-- 30天内培训课程播放人次排行图表 -->
<template>
  <div id="classPlayEchart" class="chartInit"></div>
</template>

<script>
export default {
  name: 'classPlay',
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
      let myChart = this.$echarts.init(document.getElementById('classPlayEchart'))
      this.chart = myChart
      const dataList = [1000, 588, 1800, 2200, 2895, 599, 2600, 1000]
      let option = {
        grid: {
          right: 50,
          left: 20,
          bottom: 50,
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
              width: 1//坐标线的宽度
            }
          },
          axisLabel: {//X轴文字的样式
            textStyle: {
              color: '#fff',
              fontSize: 26
            }
          },

        },
        yAxis: {
          type: 'category',
          axisLabel: {//Y轴文字的样式
            textStyle: {
              color: '#fff',
              fontSize: 26,
            },
          },
          axisLine: {//Y轴线的样式
            lineStyle: {
              type: 'solid',
              color: 'rgba(49, 157, 246, 0.3)',//左边线的颜色
              width: 1//坐标线的宽度
            }
          },
          data: ['办公软件', '新兴领域创业策略', '公务员任职培训', '公共管理能力', '互联网与新就业', '沟通表达能力提升', '安全生产意识', '办公软件操作']
        },
        series: [
          {
            name: '',
            type: 'bar',
            itemStyle: {
              color: (params) => {
                if (Math.max(...dataList) == params.value) {
                  return new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{ offset: 0, color: '#596BFF' }, { offset: 1, color: '#B83EE1' }])
                } else {
                  return new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{ offset: 0, color: '#2755FF' }, { offset: 1, color: '#00AEFF' }])
                }
              }
            },
            label: {
              position: 'insideRight',
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 26,
              },
              formatter: (params) => {
                if (Math.max(...dataList) == params.value) {
                  return params.value
                } else {
                  return ''
                }
              },
              emphasis: {
                show: true,
                //数据在柱子头部加载
                position: 'insideRight',
                textStyle: {
                  color: '#fff',
                  fontSize: 26,
                },
                formatter: (params) => {
                  return params.value
                },
              }


            },

            data: dataList
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