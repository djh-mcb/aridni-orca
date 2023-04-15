<template>
  <img src="../assets/images/logo-pink.png" id="welcome-logo">
</template>

<script>
export default {
  name: 'WelcomeLogo',
}
</script>

<style scoped>
#welcome-logo {
  margin: auto;
  cursor: var(--mouseover-cursor);
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
