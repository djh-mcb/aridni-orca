<template>
    <div>
        <div v-if="loadAssets() || !assetsLoaded" class="loadingScreen">
            <div v-if="!loadFailed" class="loadingText">
                .・゜゜*・LOADING✧･:*゜・．.
                <div class="loadingBar">
                    <div :style="{width: getProgressPercentage()}" class="loadingProgress"></div>
                </div>
            </div>
            <div v-if="loadFailed" class="loadingText">
                .・゜゜*・LOAD FAILED✧･:*゜・．.<br><br>
                Your browser and/or OS does not<br>
                support modern .webp images, which<br>
                are required to view the full<br>
                version of this website.
                <br><br>
                Please update your browser and/or<br>
                OS, or try a different browser.<br>
                <br><br>
                <div class="basicSiteButton clickable" @click="this.assetsLoaded=true">GO TO BASIC SITE</div>
            </div>
        </div>
        <WelcomeLogo v-if="assetsLoaded && !loadFailed" @click="goToHome"/>
        <FallbackWelcomePage v-if="assetsLoaded && loadFailed"/>
        <SocialsBar className="socialsBar"/>
    </div>
</template>

<script>
import WelcomeLogo from '../components/WelcomeLogo.vue'
import FallbackWelcomePage from '../components/FallbackWelcomePage.vue'
import SocialsBar from '../components/SocialsBar.vue'
import PreloadAssets from '../utility/LoadAssets.js';

export default {
    name: 'WelcomePage',
    components: {
        WelcomeLogo,
        FallbackWelcomePage,
        SocialsBar
    },
    data: function() {
        return {
            "loading": false,
            "assetsLoaded": false,
            "loadFailed": false,
            "loadedAssetCount": 0,
            "assetsToLoad": [
                "media/background-video.mp4",
                "img/background-video-backup.webp",
                "img/logo-orange.webp",
                "img/bubble.webp",
                "img/logo-pink.webp",
                "img/buy-image.webp",
                "img/magic-card.webp",
                "img/mushroom-emoji-text-cursor.webp",
                "img/crystal-sword.webp",
                "img/mushrooms.webp",
                "img/fairy-facts.webp",
                "img/parchment.webp",
                "img/fairy-ring.webp",
                "img/featherpluck-art.webp",
                "img/renaissance.webp",
                "img/harp-playing.webp",
                "img/shows-image.webp",
                "img/indi-face.webp",
                "img/watch-image.webp",
                "img/listen-image.webp",
            ]
        }
    },
    methods: {
        goToHome() {
            this.$router.push({ name: "home" });
        },
        loadAssets () {
            if(!this.loading) {
                this.loading = true;
                this.loadedAssetCount = 0;
                this.loadFailed = false;
                PreloadAssets(this.assetsToLoad).forEach(p => p.then((asset) => {
                    console.log(++(this.loadedAssetCount) + " of " + this.assetsToLoad.length + " loaded " + asset.src);
                    if(!this.loadFailed && this.loadedAssetCount >= this.assetsToLoad.length) {
                        this.assetsLoaded = true;
                    }
                }).catch(() => {
                    this.loadFailed = true;
                }));
            }
        },
        getProgressPercentage() {
            return (((this.loadedAssetCount) / this.assetsToLoad.length) * 100) + '%';
        }
    }
}
</script>

<style>
.socialsBar {
    position: absolute;
    top: calc(100% - 3.5em);
    left: 1em;
    width: 15em;
}

.loadingScreen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: blue;
    display: flex;
    align-items: center;
    justify-items: center;
}

.loadingText {
    width: 100%;
    color: #ff6100;
    font-family: 'Courier New', Courier, monospace;
    /* font-style: normal; */
}

.loadingBar {
    border: 1px solid #ff6100;
    height: 1em;
    width: 15em;
    position: relative;
    margin: auto;
}

.loadingProgress {
    background-color: #ff6100;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
}

.basicSiteButton {
    background-color: #ff6100;
    color: blue;
    font-style: normal;
    width: 11em;
    margin: auto;
    padding: 0.5em;
    user-select: none;
}

.basicSiteButton:hover {
    background-color: #f58540;
}

@media (max-width: 641px) {
    .socialsBar {
        position: relative;
        width: 90%;
        margin: auto;
        left: 0;
    }
}

</style>
