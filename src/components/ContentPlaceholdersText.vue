<template>
  <div :class="MainClassObject">
    <div v-for="n in lines" :key="n" :class="classObject" />
  </div>
</template>

<script>
export default {
  name: 'content-placeholders-text',
  computed: {
    MainClassObject () {
      return {
        'vue-blog-placeholders-text': true,
        ['vue-blog-placeholders-thickness-' + this.thickness]: this.thickness,
      }
    },
    classObject () {
      return {
        'vue-blog-placeholders-text__line': true,
      }
    },
  },
  props: {
    lines: {
      type: Number,
      default: 4,
    },
    thickness: {
      type: Number,
      default: 15,
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
