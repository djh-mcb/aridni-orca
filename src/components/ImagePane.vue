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
  border: 0.6vh solid var(--accentColor);
}
</style>
