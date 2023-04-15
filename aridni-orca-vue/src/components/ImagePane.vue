<template>
  <img :src="require(`@/assets/images/${source}`)" :style="cssProps">
</template>

<script>
export default {
  name: 'ImagePane',
  props: {
    source: String,
    accentColor: String,
  },
  computed: {
    cssProps() {
      return {
        '--accentColor': (this.accentColor),
      }
    }
  },
}
</script>

<style scoped>
img {
  border: 5px solid var(--accentColor);
}
</style>
