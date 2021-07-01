<!-- 首页 -->
<template>
  <div class="home-container">
    <div class="home-title"><span>桂林市退役军人就业创业服务平台</span></div>
    <div class="home-content">
      <div class="home-head">
        <wireframe class="headStyleCss">
          <homeHead></homeHead>
        </wireframe>
      </div>
      <div class="home-chart">
        <div class="home-chart-left">
          <wireframe class="chartLeftTopCss">
            <chartTitle title="行业30天投递人数排行"></chartTitle>
            <businessEchart></businessEchart>
          </wireframe>
          <wireframe class="m-t30 chartLeftBottomCss">
            <chartTitle title="求职者学历占比"></chartTitle>
            <educationEchart></educationEchart>
          </wireframe>
        </div>
        <div class="home-chart-right">
          <div class="chart-right-top">
            <wireframe class="m-l30 register">
              <chartTitle title="注册用户分布"></chartTitle>
              <mapEchart></mapEchart>
            </wireframe>
            <wireframe class="m-l30 post">
              <chartTitle title="职位需求人数TOP10"></chartTitle>
              <postNeed></postNeed>
            </wireframe>
            <wireframe class="m-l30 salary">
              <chartTitle title="新增职位平均薪酬TOP10"></chartTitle>
              <newPostMoney></newPostMoney>
            </wireframe>
            <wireframe class="m-l30 company">
              <chartTitle title="热门企业简历投递数"></chartTitle>
              <hotCompany></hotCompany>
            </wireframe>
          </div>
          <div class="chart-right-bottom">
            <wireframe class="m-l30 business">
              <chartTitle title="行业30天新增职位数"></chartTitle>
              <newAddPost></newAddPost>
            </wireframe>
            <wireframe class="m-l30 train">
              <chartTitle title="30天内培训课程播放人次排行"></chartTitle>
              <classPlay></classPlay>
            </wireframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'name',
  components: {},
  data () {
    return {
    };
  },

  mounted () { },

  computed: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.home-container {
  width: 100%;
  height: 100%;
  .home-title {
    width: 100%;
    height: 156px;
    background: url('../assets/img/顶部 @2x.png') no-repeat;
    background-size: 100% 100%;
    font-size: 66px;
    font-family: 'PingFang SC';
    font-weight: bold;
    color: #12bbfb;
    text-align: center;
    line-height: 156px;
    span {
      color: #12bbfb;
      text-shadow: 0px 0px 6px rgba(20, 113, 193, 0.3);
      background: linear-gradient(0deg, #319df5 0.68359375%, #00ccff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .home-content {
    width: 100%;
    height: 100%;
    padding: 0 50px;
    .home-head {
      width: 100%;
      margin: 30px 0;
      background: rgba(3, 16, 93, 0.3);
      .headStyleCss {
        width: 100%;
        height: 178px;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
    .home-chart {
      width: 100%;
      display: flex;
      .home-chart-left {
        width: 18%;
        .chartLeftTopCss {
          width: 100%;
          height: 1230px;
          box-sizing: border-box;
          //   background-image: url('../assets/img/b j@2x.png') no-repeat;
          //   background-size: 100% 100%;
        }
        .chartLeftBottomCss {
          width: 100%;
          height: 456px;
          background-color: #080a38;
        }
      }
      .home-chart-right {
        width: 82%;
        .chart-right-top {
          display: flex;
          width: 100%;
          height: 898px;
          justify-content: space-between;
          .register {
            width: 25%;
          }
          .post {
            width: 30%;
          }
          .salary {
            width: 25%;
          }
          .company {
            width: 19%;
          }
        }
        .chart-right-bottom {
          display: flex;
          height: 788px;
          margin-top: 30px;
          justify-content: space-between;
          .business {
            width: 56%;
          }
          .train {
            width: 43%;
          }
        }
      }
    }
  }
  .chartCss {
    width: 100%;
    height: auto;
    // background-color: pink;
  }
}
</style>
