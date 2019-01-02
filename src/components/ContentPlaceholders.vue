<template>
  <div :class="classObject">
    <slot />
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
  },
}
</script>

<style lang="scss">
  @import '../styles.scss';
</style>
