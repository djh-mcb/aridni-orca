<template>
    <div class="panelBox">
        <div class="rightSide column">
            <div class="topRow row">
                <div class="innerRightColumn">
                    <ListenPane class="listen-pane"/>
                </div>
                <div class="outerColumn column">
                    <ImagePane class="about-pane clickable" @click="this.$router.push({name: 'about'})" source="harp-playing.webp" />
                    <CyclingImagePane class="magic-pane" :panes=magicPanes />
                </div>
            </div>
            <div class="bottomRightRow row">
                <a href="https://aridniorca.bandcamp.com/"><NavigationPane class="buy-pane" source="buy-image.webp" accentColor="white" text="buy"/></a>
                <ImagePane class="featherpluck-pane" source="featherpluck-art.webp" accentColor="#ceeefd"/>
            </div>
        </div>
        <div class="leftSide row">
            <div class="leftColumn column">
                <WatchPane class="watch-pane" source="watch-image.webp" accentColor="pink" text="watch" destination="watch"/>
                <div class="bottomLeftRow row">
                    <ShowsPane class="shows-pane"/>
                    <img class="logo clickable" src="../assets/images/logo-orange.webp" @click="this.$router.push({ name: 'welcome' });">
                </div>
            </div>
            <div class="innerLeftColumn column">
                <ImagePane class="renaissance-pane" source="renaissance.webp" accentColor="orange"/>
                <CyclingImagePane class="fairy-ring-pane" :panes=fairyPanes />
                <div class="contact-pane-box" @click="showContactInfo=!showContactInfo">
                    <NavigationPane class="contact-pane" source="bubble.webp" textColor="#ff6100" text="contact"/>
                    <div class="contact-info-bubble clickable" v-show="showContactInfo"><div class="contact-info">aridni.orca at &nbsp; &nbsp; gmail dot com</div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationPane from '../components/NavigationPane.vue'
import ImagePane from '../components/ImagePane.vue'
import CyclingImagePane from '../components/CyclingImagePane.vue'
import ListenPane from '../components/ListenPane.vue'
import ShowsPane from '../components/ShowsPane.vue'
import WatchPane from '../components/WatchPane.vue'

export default {
    name: 'HomePage',
    data() {
        return {
            magicPanes: [{source: 'mushrooms.webp', accentColor: 'red'}, {source: 'magic-card.png', accentColor: 'transparent'}],
            fairyPanes: [{source: "fairy-ring.webp", accentColor:  'transparent'}, {source: 'fairy-facts.png', accentColor: 'transparent'}],
            showContactInfo: false
        }
    },
    components: {
        NavigationPane,
        ImagePane,
        CyclingImagePane,
        ListenPane,
        ShowsPane,
        WatchPane
    },
}
</script>

<style scoped>
.panelBox {
    width: 100%;
    height: 100%;
    font-size: 0.88vw;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: row-reverse wrap;
    gap: 0.77vw;
}

.row {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 0.77vw;
}

.column {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 2vw;
    align-items: flex-start;
}

.leftSide {
    flex-grow: 1;
}

.rightSide {
    margin-top: 0.77vw;
    margin-right: 0.77vw;
    flex-grow: 1;
}

.leftColumn {
    margin-top: 0.39vw;
    margin-left: 0.39vw;
    flex-grow: 1;
}

.outerColumn {
    flex-grow: 1;
    justify-content: space-around;
}

.innerLeftColumn {
    flex-grow: 1;
    justify-content: space-around;
}

.innerRightColumn {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.topRow {
    justify-content: space-around;
    width: 100%;
    flex-grow: 1;
}

.bottomLeftRow {
    justify-content: space-around;
    width: 100%;
    flex-grow: 1;
    margin-bottom: 0.77vw;
}
.bottomRightRow {
    justify-content: space-around;
    width: 100%;
    flex-grow: 1;
    margin-bottom: 0.77vw;
}

.logo {
    width: 10vw;
    align-self: center;
}
.watch-pane {
    width: 25vw;
}

.shows-pane {
    width: 12vw;
    align-self: flex-end;
    margin-bottom: 0.77vw;
}

.featherpluck-pane {
    width: 9vw;
    align-self: center;
    margin-right: 0.77vw;
}

.renaissance-pane {
    width: 9vw;
    align-self: flex-end;
}

.contact-pane-box {
    width: 11.6vw;
    align-self: flex-start;
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
    border-radius: 100%;
    background-color: blue;
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
    width: 25vw;
    align-self: center;
}

.listen-pane {
    width: 20vw;
}

.magic-pane {
    width: 10vw;
    align-self: center;
}

.fairy-ring-pane {
    width: 12.4vw;
}

.about-pane {
    width: 7vw;
    align-self: flex-end;
}

@media (max-width: 1025px), (max-width: 1200px){
    .panelBox {
        flex-direction: column;
        flex-wrap: column wrap;
        font-size: 2vw;
    }

    .listen-pane {
        width: 40vw;
    }

    .about-pane {
        width: 10vw;
        align-self: center;
    }

    .magic-pane {
        width: 20vw;
        align-self: flex-start;
    }

    .buy-pane {
        width: 60vw;
    }

    .featherpluck-pane {
        width: 20vw;
    }

    .watch-pane {
        width: 50vw;
        align-self: center;
    }

    .shows-pane {
        width: 20vw;
    }

    .logo {
        width: 20vw;
    }

    .renaissance-pane {
        width: 20vw;
        align-self: center;
    }

    .fairy-ring-pane {
        width: 20vw;
    }

    .innerLeftColumn {
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap row;
    }

    .contact-pane-box {
        width: 30vw;
    }
}

@media (max-width: 641px) {
    .panelBox {
        flex-direction: column;
        flex-wrap: column wrap;
        font-size: 5vw;
    }
    .row{
        gap: 5vw;
    }

    .column {
        gap: 5vw;
    }

    .listen-pane {
        width: 90vw;
        margin-top: 5vw;
    }

    .about-pane {
        width: 40vw;
    }

    .magic-pane {
        width: 40vw;
    }

    .outerColumn {
        flex-direction: row;
    }

    .buy-pane {
        width: 70vw;
    }

    .featherpluck-pane {
        width: 20vw;
    }

    .watch-pane {
        width: 90vw;
        align-self: center;
        margin-top: 5vw;
    }

    .leftColumn {
        margin-top: 0;
        margin-left: 0;
    }
    .shows-pane {
        width: 50vw;
    }

    .logo {
        width: 40vw;
    }

    .renaissance-pane {
        width: 30vw;
    }

    .fairy-ring-pane {
        width: 50vw;
    }

    .innerLeftColumn {
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap row;
    }

    .contact-pane-box {
        width: 70vw;
    }
}
</style>
