<template>
  <div class="watchPaneBox">
    <NavigationPane class="watchPane" source="watch-image.gif" accentColor=pink text="watch" @click="showPlayer = true"/>
    <iframe v-show=showPlayer class="embeddedPlayer" src="https://www.youtube.com/embed/bGePQWRfElg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</template>

<script>
import NavigationPane from './NavigationPane.vue';

export default {
  name: 'WatchPane',
  components: {
    NavigationPane,
  },
  data() {
    return {
      showPlayer: false
    }
  }
}
</script>

<style scoped>
.watchPaneBox {
  position: relative;
}

.watchPane {
  width: 100%;
  height: 100%
}

.embeddedPlayer {
    position: absolute;
    top: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: 100%;
}
</style>