<template>
  <div id="app">
    <video autoplay muted loop id="background-video">
      <source src="./assets/videos/background-video.mp4" type="video/mp4">
    </video>
    <img src="./assets/images/logo-pink.png" id="welcome-logo">
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#background-video {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

#welcome-logo {
  margin: auto;
  cursor: url(./assets/images/mushroom-emoji-text-cursor.png) 10 6, move;
}

@media (orientation: landscape) {
  #welcome-logo {
    height: 85vh;
  }
}

@media (orientation: portrait) {
  #welcome-logo {
    width: 70vw;
  }
}

</style>
