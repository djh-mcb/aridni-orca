<template>
  <div class="listenPaneBox">
    <NavigationPane class="listenPane" source="listen-image.gif" accentColor="blue" text="listen" @click="showPlayer = true"/>
    <iframe v-show=showPlayer class="embeddedPlayer" src="https://open.spotify.com/embed/artist/0H4Y63FfweRZmLlIohWamc?utm_source=generator&theme=1" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <ImagePane v-show=showPlayer class="returnToVideoButton clickable" source="listen-image.gif" accentColor="blue" @click="showPlayer = false"/>
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

.embeddedPlayer {
    position: absolute;
    top: calc(var(--border-size) - 1px);
    left: calc(var(--border-size) - 1px);
    height: calc(100% - var(--border-size) * 2 + 2px);
    width: calc(100% - var(--border-size) * 2 + 2px);
    background-color: blue;
}

.returnToVideoButton {
  position: absolute;
  width: 20%;
  top: calc(80% + var(--border-size) - 1px);
  left: 0;
}
</style>