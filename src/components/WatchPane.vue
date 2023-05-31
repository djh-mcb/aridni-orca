<template>
  <div class="watchPaneBox">
    <NavigationPane class="watchPane" source="watch-image.webp" accentColor=pink text="watch" @click="showPlayerAndPauseMusic"/>
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
  methods: {
    showPlayerAndPauseMusic() {
      this.showPlayer = true;

      let backgroundMusic = document.getElementById("backgroundMusic");
      backgroundMusic.pause();
      backgroundMusic.volume = 0.0;
    }
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
    top: calc(var(--border-size) - 1px);
    left: calc(var(--border-size) - 1px);
    height: calc(100% - var(--border-size) * 2 + 2px);
    width: calc(100% - var(--border-size) * 2 + 2px);
}
</style>