<template>
  <div class="listenPaneBox">
    <NavigationPane class="listenPane" source="listen-image.webp" accentColor="blue" text="listen" @click="showPlayerAndPauseMusic"/>
    <div v-show=showPlayer class="embeddedPlayerBackground"></div>
    <iframe @click="showPlayer = false" v-show=showPlayer class="embeddedPlayer" src="https://open.spotify.com/embed/artist/0H4Y63FfweRZmLlIohWamc?utm_source=generator&theme=1" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <ImagePane v-show=showPlayer class="returnToVideoButton clickable" source="listen-image.webp" accentColor="blue" @click="hidePlayerAndPlayMusic"/>
  </div>
</template>

<script>
import ImagePane from './ImagePane.vue';
import NavigationPane from './NavigationPane.vue';

export default {
  name: 'ListenPane',
  components: {
    ImagePane,
    NavigationPane,
  },
  methods: {
    showPlayerAndPauseMusic() {
      this.showPlayer = true;

      let backgroundMusic = document.getElementById("backgroundMusic");
      backgroundMusic.pause();
    },
    hidePlayerAndPlayMusic() {
      this.showPlayer = false;

      if(!this.userIsWatching) {
        let backgroundMusic = document.getElementById("backgroundMusic");
        backgroundMusic.currentTime = 0;
        backgroundMusic.play();
      }
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
.listenPaneBox {
  position: relative;
}

.listenPane {
  width: 100%;
  height: 100%;
}

.embeddedPlayerBackground {
  position: absolute;
  top: calc(var(--border-size) - 1px);
  left: calc(var(--border-size) - 1px);
  height: calc(100% - var(--border-size) * 2 + 2px);
  width: calc(100% - var(--border-size) * 2 + 2px);
  background-color: #C11741
}

.embeddedPlayer {
    position: absolute;
    top: calc(var(--border-size) - 1px);
    left: calc(var(--border-size) - 1px);
    height: 80%;
    width: calc(100% - var(--border-size) * 2 + 2px);
}

.returnToVideoButton {
  position: absolute;
  width: 20%;
  top: calc(80% + var(--border-size) - 2px);
  left: 0;
}
</style>