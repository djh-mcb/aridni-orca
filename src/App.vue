<template>
  <div id="app">
    <video autoplay muted loop id="background-video">
      <source src="./assets/videos/background-video.mp4" type="video/mp4">
    </video>
    <router-view class="mainView"></router-view> 
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
:root {
  --border-size: 0.33vw;
}

@media (max-aspect-ratio: 14/10) {
  :root {
    --border-size: 0.7vw;
  }
}

@media (max-aspect-ratio: 10/15) {
  :root {
    --border-size: 1.5vw;
  }
}

#app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: bold;
  font-style: italic;
}

#background-video {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.clickable {
  cursor: url(./assets/images/mushroom-emoji-text-cursor.png) 10 6, move;
}

.mainView {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
