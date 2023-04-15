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
  cursor: var(--mouseover-cursor);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
