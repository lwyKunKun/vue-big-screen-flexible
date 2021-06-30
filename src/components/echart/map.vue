<!-- 地图 -->
<template>
  <div id="map" class="chartInit"></div>
</template>

<script>
import guilinJson from '@/assets/json/guilin.json'
export default {
  name: 'mapEchart',
  components: {},
  data () {
    return {
      chart: ''
    };
  },

  mounted () {
    this.init()
    this.$resize(this.init, this.chart);
  },

  computed: {},

  methods: {
    init () {
      let myChart = this.$echarts.init(document.getElementById('map'))
      this.chart = myChart;
      this.$echarts.registerMap("guilin", guilinJson);
      let geoCoordMap = {
        '秀峰区': [110.292445, 25.278544],
        '叠彩区': [110.300783, 25.301334],
        '象山区': [110.284882, 25.261986],
        '七星区': [110.317577, 25.254339],
        '雁山区': [110.305667, 25.077646]
      };
      var areaList = ['秀峰区', '叠彩区', '象山区', '七星区', '雁山区']
      //模拟数据
      let option = { // 进行相关配置
        color: [],
        legend: {
          show: true,
          icon: 'circle',
          orient: 'vertical',//垂直
          bottom: '10%',
          right: '10%',
          textStyle: {
            color: '#fff',
            fontSize: this.$fontSize(24)
          },
        },
        geo: { // 这个是重点配置区
          map: 'guilin', // 表示中国地图
          label: {
            show: true, // 是否显示对应地名
            textStyle: { //字体颜色
              color: '#000443',
              fontSize: this.$fontSize(24)
            },
            formatter: (params) => {
              if (params.name == '秀峰区' || params.name == '叠彩区' || params.name == '象山区' || params.name == '七星区' || params.name == '雁山区') {
                return ''
              } else {
                return params.name
              }

            }
          },
          zoom: 1.25,//地图大小
          roam: false,//是否鼠标进行缩放
          itemStyle: {
            borderWidth: this.$fontSize(2), // 地图边框宽度
            borderColor: '#2127A8', // 地图边框颜色
            areaColor: '#0086FC', // 地图颜色
          },
          emphasis: {
            label: {
              show: true,
              color: '#000443'
            },
            itemStyle: {
              areaColor: '#0086FC', // 地图颜色
            }
          }


        },
        //滑动显示数据
        series: [
          {
            name: '秀峰区',
            type: 'custom',
            coordinateSystem: 'geo',
            renderItem (params, api) {
              //具体实现自定义图标的方法
              return {
                type: 'image',
                style: {
                  image: '@/assets/img/icon1.jpeg', // 自定义的图片地址
                  x: api.coord([v.data[params.dataIndex].value[0], v.data[params.dataIndex].value[1]])[0],   // 数据的设置
                  y: api.coord([v.data[params.dataIndex].value[0], v.data[params.dataIndex].value[1]])[1],
                },
              };
            },


            // cursor: "pointer",//鼠标放上去的效果
            label: {
              show: false,
              emphasis: {//滑过展示
                show: false
              }
            },
            itemStyle: {
            },

          },
          {
            name: '叠彩区',
            type: 'scatter',
            coordinateSystem: 'geo',
            color: "#e1ebe3",//点的颜色
            symbolSize: this.$fontSize(25),//点的大小
            symbol: "pin",//点的样式
            // cursor: "pointer",//鼠标放上去的效果
            label: {
              show: false,
              emphasis: {//滑过展示
                show: false
              }
            },
            itemStyle: {
            },

          },
          {
            name: '象山区',
            type: 'scatter',
            coordinateSystem: 'geo',
            color: "#e1ebe3",//点的颜色
            symbolSize: this.$fontSize(25),//点的大小
            symbol: "pin",//点的样式
            // cursor: "pointer",//鼠标放上去的效果
            label: {
              show: false,
              emphasis: {//滑过展示
                show: false
              }
            },
            itemStyle: {
            },

          },
          {
            name: '七星区',
            type: 'scatter',
            coordinateSystem: 'geo',
            color: "#e1ebe3",//点的颜色
            symbolSize: this.$fontSize(25),//点的大小
            symbol: "pin",//点的样式
            // cursor: "pointer",//鼠标放上去的效果
            label: {
              show: false,
              emphasis: {//滑过展示
                show: false
              }
            },
            itemStyle: {
            },

          },
          {
            name: '雁山区',
            type: 'scatter',
            coordinateSystem: 'geo',
            color: "#e1ebe3",//点的颜色
            symbolSize: this.$fontSize(25),//点的大小
            symbol: "pin",//点的样式
            // cursor: "pointer",//鼠标放上去的效果
            label: {
              show: false,
              emphasis: {//滑过展示
                show: false
              }
            },
            itemStyle: {
            },

          },



        ],
      }
      myChart.setOption(option)

    }
  }
}

</script>
<style lang='scss' scoped>
</style>