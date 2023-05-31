<template>
  <div id="app">
    <video @play="backupBackgroundRequired = false" autoplay muted loop playsinline class="background-video" src="./assets/videos/background-video.mp4" type="video/mp4"/>
    <audio id="backgroundMusic" type="audio/mpeg" loop :src="require('@/assets/audio/background-music.mp3')"></audio>
    <img v-if=backupBackgroundRequired class="background-video" src="./assets/images/background-video-backup.webp">
    <router-view class="mainView"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    document.title = "aridni orca";
  },
  data() {
    return {
      "backupBackgroundRequired": true
    }
  }
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

.background-video {
  top: -1%;
  left: -1%;
  position: fixed;
  width: 102%;
  height: 102%;
  min-width: 102%;
  min-height: 102%;
  object-fit: cover;
  z-index: -1;
}

.clickable {
  cursor: url(./assets/images/mushroom-emoji-text-cursor.webp) 10 6, pointer;
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
