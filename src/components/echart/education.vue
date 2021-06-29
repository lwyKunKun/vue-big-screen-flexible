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
          right: this.$fontSize(70),
          left: this.$fontSize(10),
          bottom: this.$fontSize(20),
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
              fontSize: this.$fontSize(24)
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
              borderWidth: this.$fontSize(2),
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
              distance: 15,
              textStyle: {
                fontSize: this.$fontSize(24),
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
              position: 'right',
              textStyle: {
                color: 'inherit',//label的颜色继承柱条的颜色
                fontSize: this.$fontSize(24),
              },
            },
            data: this.dataList
          },

        ]
      };
      myChart.setOption(option)
      series: [
        {
          name: '访问来源', type: 'pie', radius: '55%', center: ['50%', '50%'],
          color: ["#1576d2", "#d14a82", "#26c1f2", "#a166ff", "#1271cc", "#272f67", "rgba(156, 43, 182, 1)"],
          data: [{ value: 80, name: '华为' }, { value: 98, name: '苹果' },
          { value: 10, name: '三星' }, { value: 80, name: '小米' },
          { value: 35, name: '其他' }].sort(function (a, b) { return a.value - b.value; }),
          label: {                // 这里定义了文本 百分比 是'value'样式的                
            formatter: '{b}: {value|{d}}', rich: {                    // 这个'value'样式表示文字颜色为白色                    
              value: { color: '#fff', }
            }
          },
          labelLine: { lineStyle: { color: 'rgba(255, 255, 255, 0.3)' }, smooth: 0.2, length: 10, length2: 20 }
        }]


    }
  }
}

</script>
<style lang='scss' scoped>
</style>