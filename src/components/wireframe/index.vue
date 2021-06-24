<!-- 线框组件 -->
<template>
  <div class="lineBox" :style="styleCss">
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
    styleCss: {
      type: Object,
      required: true
    },
    // height: {
    //   type: String,
    //   required: true

    // },
    // width: {
    //   type: String

    // }
  },
  components: {},

  data () {
    return {

    };
  },

  mounted () {
    console.log(this.styleCss, '1111');
    console.log(this.realStyleCss);

  },

  computed: {
    realStyleCss () {
      for (var key in this.styleCss) {
        console.log(this.styleCss[key], '33333');
        if (key == 'height' || key == 'width') {
          this.styleCss[key] = (this.styleCss[key]) / 384 + 'rem'
        }

      }
      return this.styleCss

    },
    realHeight () {
      return (this.styleCss.height / 384)
    },
    realWidth () {
      return (this.styleCss.width / 384)

    }

  },

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>