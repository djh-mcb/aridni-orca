<template>
  <div>
    <img class="background-video super-background" src="../assets/images/background-png-backup.png">
    <img src="../assets/images/logo-png-backup.png" id="welcome-logo" class="clickable" @click="openBandcamp">
  </div>
</template>

<script>
export default {
  name: 'FallbackWelcomePage',
  methods: {
    openBandcamp() {
      window.open('https://aridniorca.bandcamp.com/');
    }
  }
}
</script>

<style scoped>
#welcome-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.super-background {
  z-index: -2;
}

@media (orientation: landscape) {
  #welcome-logo {
    height: 85vh;
    width: auto;
  }
}

@media (orientation: portrait) {
  #welcome-logo {
    width: 70vw;
    height: auto;
  }
}
</style>
