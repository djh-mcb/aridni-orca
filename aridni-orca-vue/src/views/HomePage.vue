<template>
    <div class="panelBox">
        <NavigationPane class="watch-pane" source="watch-image.gif" accentColor="pink" text="watch"/>
        <NavigationPane class="shows-pane" source="shows-image.gif" accentColor="#bcb9af" text="shows"/>
        <NavigationPane class="listen-pane" source="listen-image.gif" accentColor="blue" text="listen"/>
        <NavigationPane class="magic-pane" :source=magicImage accentColor="transparent" text="" @click="magicImage = 'magic-card.png'"/>
        <NavigationPane class="harp-pane" source="harp-playing.gif" accentColor="transparent" text=""/>
        <NavigationPane class="featherpluck-pane" source="featherpluck-art.png" accentColor="#ceeefd" text=""/>
        <NavigationPane class="buy-pane" source="buy-image.jpeg" accentColor="white" text="buy"/>
    </div>
</template>

<script>
import NavigationPane from '../components/NavigationPane.vue'

export default {
    name: 'HomePage',
    data() {
        return {    
            magicImage: "mushrooms.jpg"
        }
    },
    components: {
        NavigationPane
    },
}
</script>

<style>
.panelBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
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

.buy-pane {
    height: 15em;
}

.listen-pane {
    height: 40em;
}

.magic-pane {
    height: 17em;
}

.harp-pane {
    height: 13em;
}
</style>
  