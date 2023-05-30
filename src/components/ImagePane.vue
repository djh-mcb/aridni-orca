<template>
  <div>
    <img :src="require(`@/assets/images/${source}`)" :style="cssProps">
  </div>
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
  border: var(--border-size) solid var(--accentColor);
  width: calc(100% - var(--border-size) * 2 + 1px);
  height: auto;
  display: block;
}
</style>
