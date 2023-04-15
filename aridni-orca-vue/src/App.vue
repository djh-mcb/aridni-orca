<template>
  <div id="app">
    <video autoplay muted loop id="background-video">
      <source src="./assets/videos/background-video.mp4" type="video/mp4">
    </video>
    <router-view></router-view> 
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
  --mouseover-cursor: url(./assets/images/mushroom-emoji-text-cursor.png) 10 6, move;
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
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>
