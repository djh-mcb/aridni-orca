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
                    <ImagePane class="fairy-ring-pane clickable" :source=fairyImage accentColor="transparent" @click="fairyImage = 'fairy-facts.jpg'"/>
                </div>
                <NavigationPane class="listen-pane" source="listen-image.gif" accentColor="blue" text="listen"/>
                <div class="outerColumn column">
                    <ImagePane class="harp-pane" source="harp-playing.gif" accentColor="transparent"/>
                    <ImagePane class="magic-pane clickable" :source=magicImage :accentColor=magicColor @click="magicImage = 'magic-card.png'; magicColor = 'transparent'"/>
                </div>
            </div>
            <div class="bottomRightRow row">
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
    /* background-color: green; */
    flex-grow: 1;
}
.rightColumn {
    /* background-color: red; */
    flex-grow: 2;
}

.outerColumn {
    /* background-color: black; */
    flex-grow: 1;
    justify-content: space-around;
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
}
.bottomRightRow {
    /* background-color: orange; */
    justify-content: space-around;
    width: 100%;
    flex-grow: 1;
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

.buy-pane {
    height: 13em;
    align-self: flex-end;
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

.harp-pane {
    height: 13em;
    align-self: flex-end;
}
</style>
  