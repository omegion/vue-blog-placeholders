<template>
  <div :class="classObject" :style="styleObject">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'content-placeholders',
  computed: {
    classObject () {
      return {
        'vue-blog-placeholders': true,
        ['vue-blog-placeholders-rounded-' + this.rounded]: this.rounded,
        'vue-blog-placeholders-is-centered': this.centered,
        'vue-blog-placeholders-is-animated': this.animated,
      }
    },
    styleObject () {
      return {
        '--gradient': this.gradientColor,
        '--background': this.backgroundColor,
      }
    },
  },
  props: {
    rounded: {
      type: Number,
      default: 10,
    },
    centered: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: true,
    },
    gradientColor: {
      type: String,
      default: '#ccc',
    },
    backgroundColor: {
      type: String,
      default: '#eee',
    },
  },
}
</script>

<style lang="scss">
  @import '../styles.scss';
</style>
