<template>
    <div>
        <div v-if="loadAssets() || !assetsLoaded" class="loadingScreen">
            <div class="loadingText">
                loading
                <div class="loadingBar">
                    <div :style="{width: getProgressPercentage()}" class="loadingProgress"></div>
                </div>
            </div>
        </div>
        <WelcomeLogo v-show="assetsLoaded" @click="goToHome"/>
        <SocialsBar className="socialsBar"/>
    </div>
</template>

<script>
import WelcomeLogo from '../components/WelcomeLogo.vue'
import SocialsBar from '../components/SocialsBar.vue'
import PreloadAssets from '../utility/LoadAssets.js';

export default {
    name: 'WelcomePage',
    components: {
        WelcomeLogo,
        SocialsBar
    },
    data: function() {
        return {
            "loading": false,
            "assetsLoaded": false,
            "loadedAssetCount": 0,
            "assetsToLoad": [
                "/media/background-video.mp4",
                "/img/about.svg",
                "/img/logo-orange.png",
                "/img/bubble.gif",
                "/img/logo-pink.png",
                "/img/buy-image.jpeg",
                "/img/magic-card.png",
                "/img/crushed-art.jpg",
                "/img/mushroom-emoji-text-cursor.png",
                "/img/crystal-sword.gif",
                "/img/mushrooms.jpg",
                "/img/fairy-facts.png",
                "/img/parchment.png",
                "/img/fairy-ring.jpg",
                "/img/purple-shimmer.gif",
                "/img/featherpluck-art.png",
                "/img/renaissance.jpg",
                "/img/harp-playing.gif",
                "/img/shows-image.gif",
                "/img/indi-face.png",
                "/img/watch-image.gif",
                "/img/listen-image.gif",
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
                PreloadAssets(this.assetsToLoad).forEach(p => p.then((asset) => {
                    console.log(++(this.loadedAssetCount) + " of " + this.assetsToLoad.length + " loaded " + asset.src);
                    if(this.loadedAssetCount >= this.assetsToLoad.length) {
                        this.assetsLoaded = true;
                    }
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
    height: 2.5em;
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
    font-style: normal;
}

.loadingBar {
    border: 1px solid #ff6100;
    height: 1em;
    width: 10em;
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

@media (max-width: 641px) {
    .socialsBar {
        position: relative;
        width: 90%;
        margin: auto;
        left: 0;
    }
}

</style>
