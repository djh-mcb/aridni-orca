<template>
  <div class="container" :style="cssProps">
    <img :src="require(`@/assets/images/${source}`)">
    <div id="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'NavigationPane',
  props: {
    source: String,
    accentColor: String,
    text: String,
    textColor: String,
  },
  computed: {
    cssProps() {
      return {
        '--accentColor': (this.accentColor),
      }
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  border: 5px solid var(--accentColor);
  display: inline-block;
  cursor: var(--mouseover-cursor);
}

#text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--accentColor);
  font-size: 200%;
}

img {
  height: 100%;
  display: block;
}
</style>
