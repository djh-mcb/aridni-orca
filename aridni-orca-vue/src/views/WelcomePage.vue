<template>
    <WelcomeLogo @click="goToHome"/>
    <SocialsBar className="socialsBar"/>
</template>

<script>
import WelcomeLogo from '../components/WelcomeLogo.vue'
import SocialsBar from '../components/SocialsBar.vue'

export default {
    name: 'WelcomePage',
    components: {
        WelcomeLogo,
        SocialsBar
    },
    methods: {
        goToHome() {
            this.$router.push({ name: "home" });
        }
    }
}
</script>

<style>
.socialsBar {
    position: absolute;
    top: calc(100% - 3.5em);
    left: 1em;
    height: 2.5em;
    width: 12em;
}
</style>
  