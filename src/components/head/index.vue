
<!-- 头部 -->
<template>
  <div class="header-container">
    <div v-for="(item, index) in data" :key="index" class="wrap">
      <div class="icon">
        <img :src="item.iconUrl" alt="" />
      </div>
      <div>
        <div class="name">{{ item.key }}</div>
        <div class="num">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeHead',
  components: {},

  data () {
    return {
      data: [
        {
          icon: '1',
          key: '专家数量',
          value: '879',
          iconUrl: require('../../assets/img/专家数量@2x.png')
        },
        {
          icon: '2',
          key: '知识库数量',
          value: '1245',
          iconUrl: require('../../assets/img/知识库数量@2x.png')
        },
        {
          icon: '3',
          key: '注册用户总数',
          value: '51410',
          iconUrl: require('../../assets/img/注册用户总数@2x.png')
        },
        {
          icon: '4',
          key: '注册企业总数',
          value: '51092',
          iconUrl: require('../../assets/img/注册企业总数@2x.png')
        },
        {
          icon: '5',
          key: '累计简历投递数量',
          value: '69760',
          iconUrl: require('../../assets/img/累计简历投递数量@2x.png')
        },
      ],

    };
  },

  mounted () { },

  computed: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.header-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.wrap {
  width: calc((100% - 100px) / 5);
  height: 138px;
  background-image: url('../../assets/img/框@2x.png');
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  padding-left: 47px;
  .icon {
    width: 104px;
    height: 104px;
    font-size: 30px;
    text-align: center;
    line-height: 104px;
    margin-right: 45px;
  }
  .name {
    font-size: 32px;
    font-weight: 600;
    color: #319df6;
  }
  .num {
    font-size: 26px;
    font-weight: 500;
    margin-top: 10px;
  }
}
</style>