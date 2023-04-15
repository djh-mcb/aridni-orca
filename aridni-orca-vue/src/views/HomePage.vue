<template>
    <div class="panelBox row">
        <div class="leftColumn column">
            <NavigationPane class="watch-pane" source="watch-image.gif" accentColor="pink" text="watch"/>
            <div class="bottomLeftRow row">
                <NavigationPane class="shows-pane" source="shows-image.gif" accentColor="#bcb9af" text="shows"/>
                <img class="logo clickable" src="../assets/images/logo-orange.png" @click="this.$router.push({ name: 'welcome' });">
            </div>
        </div>
        <div class="rightColumn column">
            <div class="topRow row">
                <div class="innerColumn column">
                    <ImagePane class="renaissance-pane" source="renaissance.jpg" accentColor="orange"/>
                    <ImagePane class="fairy-ring-pane clickable" :source=fairyImage accentColor="transparent" @click="fairyImage = 'fairy-facts.png'"/>
                </div>
                <NavigationPane class="listen-pane" source="listen-image.gif" accentColor="blue" text="listen"/>
                <div class="outerColumn column">
                    <div class="about-pane-box clickable">
                        <NavigationPane class="about-pane" source="harp-playing.gif"/>
                        <div class="about-text"></div>
                    </div>
                    <ImagePane class="magic-pane clickable" :source=magicImage :accentColor=magicColor @click="magicImage = 'magic-card.png'; magicColor = 'transparent'"/>
                </div>
            </div>
            <div class="bottomRightRow row">
                <NavigationPane class="contact-pane" source="bubble.gif" textColor="#ff6100" text="contact"/>
                <NavigationPane class="buy-pane" source="buy-image.jpeg" accentColor="white" text="buy"/>
                <ImagePane class="featherpluck-pane" source="featherpluck-art.png" accentColor="#ceeefd"/>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationPane from '../components/NavigationPane.vue'
import ImagePane from '../components/ImagePane.vue'

export default {
    name: 'HomePage',
    data() {
        return {    
            magicImage: "mushrooms.jpg",
            magicColor: "red",
            fairyImage: "fairy-ring.jpg",
        }
    },
    components: {
        NavigationPane,
        ImagePane
    },
}
</script>

<style scoped>
.panelBox {
    width: 100%;
    height: 100%;
}

.row {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1em;
}

.column {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1em;
    align-items: flex-start;
}

.leftColumn {
    margin-top: 0.5em;
    margin-left: 0.5em;
    /* background-color: green; */
    flex-grow: 1;
}
.rightColumn {
    margin-top: 1em;
    margin-right: 1em;
    /* background-color: red; */
    flex-grow: 2;
}

.outerColumn {
    /* background-color: black; */
    flex-grow: 1;
    justify-content: flex-start;
}

.innerColumn {
    /* background-color: brown; */
    flex-grow: 1;
    justify-content: space-around;
}

.topRow {
    justify-content: space-around;
    width: 100%;
    flex-grow: 1;
}

.bottomLeftRow {
    justify-content: space-around;
    /* background-color: aliceblue; */
    width: 100%;
    flex-grow: 1;
    margin-bottom: 1em;
}
.bottomRightRow {
    /* background-color: orange; */
    justify-content: space-around;
    width: 100%;
    flex-grow: 1;
    margin-bottom: 1em;
}

.logo {
    height: 17em;
    align-self: center;
}
.watch-pane {
    height: 25em;
}

.shows-pane {
    height: 20em;
    align-self: flex-end;
    margin-bottom: 1em;
}

.featherpluck-pane {
    height: 10em;
    align-self: center;
    margin-right: 4em;
}

.renaissance-pane {
    height: 12em;
    align-self: center;
}

.contact-pane {
    height: 13em;
    align-self: flex-end;
}
.buy-pane {
    height: 13em;
    align-self: center;
}

.listen-pane {
    height: 40em;
}

.magic-pane {
    height: 17em;
    align-self: center;
}

.fairy-ring-pane {
    height: 14em;
}

.about-pane {
    height: 14em;
    align-self: center;
    margin-top: 4em;
}
.about-pane-box {
    align-self: flex-end;
    height: 45%;
}

.about-text {
    align-self: center;
    background-color: red;
    width: 100%;
    height: 5em;
    margin-top: -18em;
    -webkit-mask: url(../assets/images/about.svg) no-repeat center;
    mask: url(../assets/images/about.svg) no-repeat center;
    mask-size: 90%, 90%;
}
</style>
  