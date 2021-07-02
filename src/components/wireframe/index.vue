
<!-- 线框组件 -->
<template>
  <div class="lineBox lineEffect">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span v-if="isEchart"></span>
    <span v-if="isEchart"></span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wireframe',
  props: {
    isEchart: {
      type: Boolean,
      default: true
    }
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