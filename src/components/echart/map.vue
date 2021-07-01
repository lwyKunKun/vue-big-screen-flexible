<!-- 地图 -->
<template>
  <div id="map" class="chartInit"></div>
</template>

<script>
import guilinJson from '@/assets/json/guilin.json'
import icon1 from '@/assets/img/1@2x.png'
import icon2 from '@/assets/img/2@2x.png'
import icon3 from '@/assets/img/3@2x.png'
import icon4 from '@/assets/img/4@2x.png'
import icon5 from '@/assets/img/5@2x.png'
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
      const seriesList = [
        {
          name: "秀峰区",
          image: icon1,
          data: [
            {
              name: "秀峰区",
              value: [110.22265, 25.30229]
            }
          ],
        },
        {
          name: "叠彩区",
          image: icon2,
          data: [
            {
              name: "叠彩区",
              value: [110.300783, 25.358905]
            }
          ],
        },
        {
          name: "象山区",
          image: icon3,
          data: [
            {
              name: "象山区",
              value: [110.236727, 25.210271]
            },

          ],
        },
        {
          name: "七星区",
          image: icon4,
          data: [
            {
              name: "七星区",
              value: [110.317577, 25.293844]
            },

          ],
        },
        {
          name: "雁山区",
          image: icon5,
          data: [
            {
              name: "雁山区",
              value: [110.305667, 25.10248]
            },

          ],
        }
      ];
      const series = seriesList.map((v) => {
        const that = this;
        return {
          name: v.name,
          type: "custom", //配置显示方式为用户自定义
          coordinateSystem: "geo",
          renderItem (params, api) {
            //具体实现自定义图标的方法
            return {
              type: "image",
              style: {
                image: v.image,
                x: api.coord([
                  v.data[params.dataIndex].value[0],
                  v.data[params.dataIndex].value[1],
                ])[0],
                y: api.coord([
                  v.data[params.dataIndex].value[0],
                  v.data[params.dataIndex].value[1]
                ])[1],
                width: that.$fontSize(22),
                height: that.$fontSize(22)
              },


            };
          },
          data: v.data
        };
      });
      //模拟数据
      let option = { // 进行相关配置
        legend: {
          show: true,
          orient: 'vertical',//垂直
          bottom: '10%',
          right: '10%',
          itemWidth: this.$fontSize(22),
          itemHeight: this.$fontSize(22),
          textStyle: {
            color: '#fff',
            fontSize: this.$fontSize(24)
          },
          data: [
            {
              name: '秀峰区',
              icon: `image://${icon1}`,
              lineStyle: {
              }
            }, {
              name: '叠彩区',
              icon: `image://${icon2}`
            }, {
              name: '象山区',
              icon: `image://${icon3}`
            }, {
              name: '七星区',
              icon: `image://${icon4}`
            },
            {
              name: '雁山区',
              icon: `image://${icon5}`
            }
          ],
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
        series
      }
      myChart.setOption(option)

    }
  }
}

</script>
<style lang='scss' scoped>
</style>