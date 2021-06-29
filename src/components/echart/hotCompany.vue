<!-- 热门企业简历投递数图表 -->
<template>
  <div id="hotCompanyEchart" class="chartInit"></div>
</template>

<script>
export default {
  name: 'hotCompany',
  components: {},

  data () {
    return {
      chart: '',
      dataList: [
        { value: 38976, name: '中国石油' },
        { value: 5987, name: '国家电网公司' },
        { value: 3690, name: '中国太平保险' },
        { value: 13258, name: '中国电子信息产品' },
        { value: 4132, name: '中国铁路工程集团' },
        { value: 6785, name: '阿里巴巴' },
        { value: 6897, name: '中国铁路工程集团2' },
      ]
    };
  },

  mounted () {
    this.init()
    this.$resize(this.init, this.chart)
  },

  computed: {},

  methods: {
    init () {
      let myChart = this.$echarts.init(document.getElementById('hotCompanyEchart'))
      this.chart = myChart

      let option = {
        color: ['#0263FF', '#FF5E1F', '#8E30FF', '#25D390', '#00EEF5', '#FFC600', '#FF4196'],
        tooltip: {
          trigger: 'item'
        },
        legend: {
          bottom: '4%',
          orient: 'vertical',//垂直
          icon: 'rect',
          itemWidth: this.$fontSize(16),
          itemHeight: this.$fontSize(16),
          textStyle: {
            color: '#fff',
            fontSize: this.$fontSize(16),

          },
          formatter: (params) => {
            if (this.dataList.length) {
              var value = ""
              this.dataList.forEach(item => {
                if (item.name == params) {
                  value = item.value
                }
              })
              return `  ${value}    ${params}`

            }

          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['30%', '70%'],
            center: ['50%', '40%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            data: this.dataList
          }
        ]
      };
      myChart.setOption(option)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>