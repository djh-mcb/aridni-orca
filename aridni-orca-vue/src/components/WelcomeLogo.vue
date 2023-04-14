<template>
  <img src="../assets/images/logo-pink.png" id="welcome-logo">
</template>

<script>
export default {
  name: 'WelcomeLogo',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#welcome-logo {
  margin: auto;
  cursor: url(../assets/images/mushroom-emoji-text-cursor.png) 10 6, move;
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
