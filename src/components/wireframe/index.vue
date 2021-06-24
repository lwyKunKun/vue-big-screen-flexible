<!-- 线框组件 -->
<template>
  <div class="lineBox" :style="{ height: realHeight + 'rem', width: realWidth + 'rem' }">
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
    height: {
      type: String,
      required: true

    },
    width: {
      type: String

    }
  },
  components: {},

  data () {
    return {

    };
  },

  mounted () {

  },

  computed: {
    realHeight () {
      return (this.height / 384)
    },
    realWidth () {
      return (this.width / 384)

    }

  },

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>