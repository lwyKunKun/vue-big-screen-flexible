<!-- 行业30天新增职位数图表 -->
<template>
  <div id="newAddPostEchart" class="chartInit"></div>
</template>

<script>
export default {
  name: 'newAddPost',
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
      let myChart = this.$echarts.init(document.getElementById('newAddPostEchart'))
      this.chart = myChart
      let option = {
        grid: {
          right: 30,
          left: 30,
          bottom: 20,
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          splitLine: {//网格线
            show: true,
            lineStyle: {
              color: '#0086FC',
              type: 'dashed',//网格虚线
            }
          },
          axisTick: {//刻度条
            show: false,
          },
          axisLine: {//X轴线的样式
            show: true,
            lineStyle: {
              type: 'solid',
              color: 'linear-gradient(-3deg, #11CBFF, rgba(150, 0, 255, 0.4))',//左边线的颜色
              width: 1//坐标线的宽度
            }
          },
          axisLabel: {//X轴文字的样式
            textStyle: {
              color: '#fff',
              fontSize: 26
            },
            interval: 0,//坐标轴间隔
            rotate: 40,//文字倾斜，显示全部的x轴坐标文字
          },
          data: ['农业', '采矿业', '制造业', '水电气生产供应业', '建筑业', '交通运输储存', '信息软件服务业', '批发/零售业', '住宿/餐饮业', '金融业', '房地产业', '租赁/商务服务业', '科学/技术服务业', '水利/环境/公共设施业', '服务/修理/其他服务业', '教育', '卫生/社会工作', '文化/体育/娱乐业', '公共组织/社会保障', '国际组织']
        },
        yAxis: {
          type: 'value',
          splitLine: {//网格线
            show: true,
            lineStyle: {
              color: '#0086FC',
              type: 'dashed',//网格虚线
            }
          },
          axisTick: {//刻度条
            show: false,
          },
          axisLine: {//y轴线的样式
            show: true,
            lineStyle: {
              type: 'solid',
              color: 'linear-gradient(-3deg, #11CBFF, rgba(150, 0, 255, 0.4))',//左边线的颜色
              width: 1//坐标线的宽度
            }
          },
          axisLabel: {//Y轴文字的样式
            textStyle: {
              color: '#fff',
              fontSize: 24
            }
          },
        },
        series: [{
          data: [200, 123, 456, 678, 456, 689, 800, 456, 987, 678, 432, 589, 907, 509, 345, 609, 509, 1200, 235, 789],
          type: 'line',
          smooth: true,
          symbol: 'none',//不显示标记图形
          areaStyle: {//阴影区域
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: '#11CBFF'
            }, {
              offset: 0,
              color: 'rgba(150, 0, 255, 0.4)'
            }], false),
          },
          lineStyle: {//线条颜色
            color: '#01C6FF'
          },
          markPoint: {
            symbol: 'circle',
            symbolSize: 20,
            itemStyle: {
              color: '#fff',
              borderColor: '#FF7723',
              borderWidth: 5,
              shadowColor: 'rgba(43, 77, 160, 0.8)',
            },
            label: {
              show: true,
              position: 'top',
              formatter: (params) => {
                return `{a|${params.value}}`
              },
              rich: {
                a: {
                  fontSize: 30,
                  color: '#00EEF5',
                }

              }
            },
            data: [{
              name: '最大值',
              type: 'max'
            }]

          },
          label: {
            show: false
          }
        }]
      };

      myChart.setOption(option)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>