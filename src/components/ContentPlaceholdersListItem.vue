<template>
  <section>
    <div :class="classObject" v-for="i in items" :key="i">
      <slot/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'content-placeholders-list-item',
  computed: {
    classObject () {
      return {
        'vue-blog-placeholders-list-item': true,
      }
    },
  },
  props: {
    items: {
      type: Number,
      default: 3,
    },
  },
}
</script>
