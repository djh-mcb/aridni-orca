<template>
  <div class="container clickable" :style="cssProps">
    <ImagePane class="image" v-bind:source="source" v-bind:accentColor="accentColor" @click="this.$router.push({ name: destination })"/>
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
    destination: String,
  },
  computed: {
    cssProps() {
      return {
        '--textColor': (this.textColor || this.accentColor),
      }
    },
  },
  components: {
    ImagePane,
  },
}
</script>

<style scoped>
.container {
  position: relative;
  display: block;
}

#text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--textColor);
  font-size: 200%;
  user-select: none;
}

.image {
  width: 100%;
  display: block;
}
</style>
