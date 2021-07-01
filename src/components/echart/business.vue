<!-- 行业30天投递人数排行图表 -->
<template>
  <div id="businessEchart" class="chartInit"></div>
</template>

<script>
export default {
  name: 'businessEchart',
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
      let myChart = this.$echarts.init(document.getElementById('businessEchart'))
      this.chart = myChart
      const dataList = [10, 20, 100, 150, 200, 250, 400, 567, 923, 600, 456, 789, 345, 678, 567, 876, 906, 123, 712, 546]
      let option = {
        grid: {
          right: this.$fontSize(50),
          left: this.$fontSize(20),
          bottom: this.$fontSize(50),
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
              fontSize: this.$fontSize(24),
            },
          },
          axisLine: {//Y轴线的样式
            lineStyle: {
              type: 'solid',
              color: 'rgba(49, 157, 246, 0.3)',//左边线的颜色
              width: this.$fontSize(1)//坐标线的宽度
            }
          },
          data: ['农业', '采矿业', '制造业', '水电气生产供应业', '建筑业', '交通运输储存', '信息软件服务业', '批发/零售业', '住宿/餐饮业', '金融业', '房地产业', '租赁/商务服务业', '科学/技术服务业', '水利/环境/公共设施业', '服务/修理/其他服务业', '教育', '卫生/社会工作', '文化/体育/娱乐业', '公共组织/社会保障', '国际组织']
        },
        series: [
          {
            name: '',
            type: 'bar',
            itemStyle: {
              color: (params) => {
                if (Math.max(...dataList) == params.value) {
                  return new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{ offset: 0, color: '#AB3661' }, { offset: 1, color: '#FF5E1F' }])
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
                fontSize: this.$fontSize(26),
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
                  fontSize: this.$fontSize(26),
                },
                formatter: (params) => {
                  return params.value
                },
              },


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