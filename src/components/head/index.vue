<!-- 头部 -->
<template>
  <div class="header-container">
    <div v-for="(item, index) in data" :key="index" class="wrap">
      <div>{{ item.icon }}</div>
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
          value: '879'
        },
        {
          icon: '2',
          key: '知识库数量',
          value: '1245'
        },
        {
          icon: '3',
          key: '注册用户总数',
          value: '51410'
        },
        {
          icon: '4',
          key: '注册企业总数',
          value: '51092'
        },
        {
          icon: '5',
          key: '累计简历投递数量',
          value: '69760'
        },
      ]
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
  justify-content: space-around;
}
.wrap {
  width: 724px;
  height: 138px;
  border: 2px solid #00519c;
  display: flex;
  font-size: 12px;
  .name {
    font-size: 32px;
    font-weight: 600;
    color: #319df6;
  }
  .num {
    font-size: 26px;
    font-weight: 500;
  }
}
</style>