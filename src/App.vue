<template>
  <div id="app">
    <video autoplay muted loop id="background-video" src="./assets/videos/background-video.mp4" type="video/mp4"/>
    <router-view class="mainView"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
}
</script>

<style>
:root {
  --border-size: 0.33vw;
}

@media (max-width: 1025px) {
  :root {
    --border-size: 0.7vw;
  }
}

@media (max-width: 641px) {
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

@font-face {
    font-family: 'Luminari-Regular';
    font-style: normal;
    font-weight: normal;
    src: url('assets/fonts/Luminari-Regular.woff') format('woff');
}

</style>
