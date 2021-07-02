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
      chart: '',
      colorList: ['#FF7723', '#25D390', '#B83EE1', '#FFC600', '#41E2FF', '#0263FF'],
      dataList: [5, 18, 6, 16, 50, 17]
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
      const that = this;
      let option = {
        grid: {
          right: 120,
          left: 40,
          bottom: 20,
          containLabel: true,
        },
        xAxis: {
          show: false,
        },
        yAxis: {
          type: 'category',
          axisLabel: {//Y轴文字的样式
            textStyle: {
              color: '#fff',
              fontSize: 26
            },
          },
          axisLine: {//Y轴线的样式
            show: false,
          },
          axisTick: {//刻度条
            show: false,
          },
          data: ['硕士', '本科', '大专', '中专', '高中', '初中及以下']
        },
        series: [
          {
            type: 'bar',
            itemStyle: {
              color: '#091D4F',
              borderWidth: 2,
              borderColor: '#003B72'
            },
            silent: false,
            barGap: '-100%',//设置两个柱子重叠
            data: [
              {
                value: 100,
                label: {
                  color: '#FF7723'
                }
              }, {
                value: 100,
                label: {
                  color: '#25D390'
                }
              }, {
                value: 100,
                label: {
                  color: '#B83EE1'
                }
              }, {
                value: 100,
                label: {
                  color: '#FFC600'
                }
              }, {
                value: 100,
                label: {
                  color: '#41E2FF'
                }
              }, {
                value: 100,
                label: {
                  color: '#0263FF'
                }
              }],

            label: {
              show: true,
              position: 'right',
              distance: 26,
              textStyle: {
                fontSize: 26,
              },
              color: ['#FF7723', '#25D390', '#B83EE1', '#FFC600', '#41E2FF', '#0263FF'],
              formatter: (parmas) => {
                return `${this.dataList[parmas.dataIndex]}%`
              },
            }
          },
          {
            name: '',
            type: 'bar',
            itemStyle: {//柱条的颜色
              color: (params) => {
                return this.colorList[params.dataIndex];
              }
            },
            label: {
              show: false,
              //   position: 'right',
              //   textStyle: {
              //     color: 'inherit',//label的颜色继承柱条的颜色
              //     fontSize: this.$fontSize(24),
              //   },
            },
            data: this.dataList
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