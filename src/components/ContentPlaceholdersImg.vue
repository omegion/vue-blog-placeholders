<template>
  <div :class="classObject"/>
</template>

<script>
export default {
  name: 'content-placeholders-img',
  computed: {
    classObject () {
      return {
        'vue-blog-placeholders-img': true,
        ['vue-blog-placeholders-height-' + this.height]: this.height,
      }
    },
  },
  props: {
    height: {
      type: Number,
      default: 2,
    },
  },
}
</script>
