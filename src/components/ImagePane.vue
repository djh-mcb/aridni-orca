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
  border: 0.33vw solid var(--accentColor);
}
</style>
