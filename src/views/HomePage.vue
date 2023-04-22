<template>
    <div class="panelBox row">
        <div class="leftColumn column">
            <WatchPane class="watch-pane" source="watch-image.gif" accentColor="pink" text="watch" destination="watch"/>
            <div class="bottomLeftRow row">
                <NavigationPane class="shows-pane" source="shows-image.gif" accentColor="#bcb9af" text="shows"/>
                <img class="logo clickable" src="../assets/images/logo-orange.png" @click="this.$router.push({ name: 'welcome' });">
            </div>
        </div>
        <div class="rightColumn column">
            <div class="topRow row">
                <div class="innerColumn column">
                    <ImagePane class="renaissance-pane" source="renaissance.jpg" accentColor="orange"/>
                    <CyclingImagePane class="fairy-ring-pane" :panes=fairyPanes />
                </div>
                <ListenPane class="listen-pane"/>
                <div class="outerColumn column">
                    <div class="about-pane-box clickable" @click="this.$router.push({name: 'about'})">
                        <ImagePane class="about-pane" source="harp-playing.gif"/>
                        <div class="about-text"></div>
                    </div>
                    <CyclingImagePane class="magic-pane" :panes=magicPanes />
                </div>
            </div>
            <div class="bottomRightRow row">
                <div class="contact-pane-box" @click="showContactInfo=!showContactInfo">
                    <NavigationPane class="contact-pane" source="bubble.gif" textColor="#ff6100" text="contact"/>
                    <div class="contact-info-bubble clickable" v-show="showContactInfo"><div class="contact-info">aridni.orca at &nbsp; &nbsp; gmail dot com</div></div>
                </div>
                <a href="https://aridniorca.bandcamp.com/"><NavigationPane class="buy-pane" source="buy-image.jpeg" accentColor="white" text="buy"/></a>
                <ImagePane class="featherpluck-pane" source="featherpluck-art.png" accentColor="#ceeefd"/>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationPane from '../components/NavigationPane.vue'
import ImagePane from '../components/ImagePane.vue'
import CyclingImagePane from '../components/CyclingImagePane.vue'
import ListenPane from '../components/ListenPane.vue'
import WatchPane from '../components/WatchPane.vue'

export default {
    name: 'HomePage',
    data() {
        return {    
            magicPanes: [{source: 'mushrooms.jpg', accentColor: 'red'}, {source: 'magic-card.png', accentColor: 'transparent'}],
            fairyPanes: [{source: "fairy-ring.jpg", accentColor:  'transparent'}, {source: 'fairy-facts.png', accentColor: 'transparent'}],
            showContactInfo: false
        }
    },
    components: {
        NavigationPane,
        ImagePane,
        CyclingImagePane,
        ListenPane,
        WatchPane
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
    height: 29.5vh;
    align-self: center;
}
.watch-pane {
    height: 45vh;
}

.shows-pane {
    height: 40vh;
    align-self: flex-end;
    margin-bottom: 1em;
}

.featherpluck-pane {
    height: 17.5vh;
    align-self: center;
    margin-right: 4em;
}

.renaissance-pane {
    height: 21vh;
    align-self: center;
}

.contact-pane-box {
    height: 22.5vh;
    align-self: flex-end;
    position: relative;
}

.contact-pane {
    width: 100%;
    height: 100%;
}

.contact-info-bubble {
    position: absolute;
    top: 15%;
    left: 15%;
    width: 70%;
    height: 70%;
    background-color: blue;
    border-radius: 100%;
}

.contact-info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ff6100;
    text-align: end;
    font-family: 'Courier New', Courier, monospace;
    font-style: normal;
    font-size: 90%;
    user-select: none;
}
.buy-pane {
    height: 22.5vh;
    align-self: center;
}

.listen-pane {
    height: 69vh;
}

.magic-pane {
    height: 29.5vh;
    align-self: center;
}

.fairy-ring-pane {
    height: 24vh;
}

.about-pane {
    height: 75%;
    align-self: center;
    padding-top: 50%; /* Space for the 'about' text svg*/
}
.about-pane-box {
    align-self: flex-end;
    height: 32vh;
}

.about-text {
    align-self: center;
    background-color: red;
    width: 100%;
    height: 27%;
    margin-top: -225%;
    -webkit-mask: url(../assets/images/about.svg) no-repeat center;
    mask: url(../assets/images/about.svg) no-repeat center;
    mask-size: 90%, 90%;
}
</style>
  