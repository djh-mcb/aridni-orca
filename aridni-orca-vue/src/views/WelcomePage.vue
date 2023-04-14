<template>
    <WelcomeLogo @click="goToHome"/>
</template>

<script>
import WelcomeLogo from '../components/WelcomeLogo.vue'

export default {
    name: 'WelcomePage',
    components: {
        WelcomeLogo
    },
    methods: {
    goToHome() {
        this.$router.push({ name: "home" });
    }
  }
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
</style>
  