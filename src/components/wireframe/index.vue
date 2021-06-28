<!-- 线框组件 -->
<template>
  <div class="lineBox">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wireframe',
  props: {
  },
  components: {},

  data () {
    return {
      realStyleCss: {}

    };
  },

  mounted () {


  },

  computed: {

  },

  methods: {},
  watch: {
  }
}

</script>
<style lang='scss' scoped>
</style>