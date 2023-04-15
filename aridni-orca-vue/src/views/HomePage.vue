<template>
    <div class="panelBox row">
        <div class="leftColumn column">
            <NavigationPane class="watch-pane" source="watch-image.gif" accentColor="pink" text="watch"/>
            <NavigationPane class="shows-pane" source="shows-image.gif" accentColor="#bcb9af" text="shows"/>
        </div>
        <div class="rightColumn column">
            <div class="topRow row">
                <div class="innerColumn column">
                    <NavigationPane class="renaissance-pane" source="renaissance.jpg" accentColor="orange"/>
                    <NavigationPane class="fairy-ring-pane" :source=fairyImage accentColor="transparent" @click="fairyImage = 'fairy-facts.jpg'"/>
                </div>
                <NavigationPane class="listen-pane" source="listen-image.gif" accentColor="blue" text="listen"/>
                <div class="outerColumn column">
                    <NavigationPane class="harp-pane" source="harp-playing.gif" accentColor="transparent"/>
                    <NavigationPane class="magic-pane" :source=magicImage :accentColor=magicColor @click="magicImage = 'magic-card.png'; magicColor = 'transparent'"/>
                </div>
            </div>
            <div class="bottomRow row">
                <NavigationPane class="buy-pane" source="buy-image.jpeg" accentColor="white" text="buy"/>
                <NavigationPane class="featherpluck-pane" source="featherpluck-art.png" accentColor="#ceeefd"/>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationPane from '../components/NavigationPane.vue'

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
        NavigationPane
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
    gap: 40px;
}


.column {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
}

.watch-pane {
    height: 25em;
}

.shows-pane {
    height: 20em;
}

.featherpluck-pane {
    height: 10em;
}

.renaissance-pane {
    height: 12em;
}

.buy-pane {
    height: 13em;
}

.listen-pane {
    height: 40em;
}

.magic-pane {
    height: 17em;
}

.fairy-ring-pane {
    height: 14em;
}

.harp-pane {
    height: 13em;
}
</style>
  