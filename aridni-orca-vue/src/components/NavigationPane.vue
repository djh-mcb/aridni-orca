<template>
  <div class="container clickable" :style="cssProps">
    <ImagePane class="image" v-bind:source="source"/>
    <div id="text">{{ text }}</div>
  </div>
</template>

<script>
import ImagePane from './ImagePane.vue';

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
  },
  components: {
    ImagePane,
  },
}
</script>

<style scoped>
.container {
  position: relative;
  display: inline-block;
}

#text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--accentColor);
  font-size: 200%;
}

.image {
  height: 100%;
  display: block;
}
</style>
