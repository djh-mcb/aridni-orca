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
</style>
  