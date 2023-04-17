<template>
    <div class="videoPane">
        <iframe class="embeddedPlayer" src="https://www.youtube.com/embed/bGePQWRfElg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
</template>

<script>

export default {
    name: 'WatchPage',
}
</script>

<style scoped>

.videoPane {
    position: relative;
    height: 30em;
    width: 53.33em;
    margin: auto;
    border: 5px solid pink;
    background-color: pink;
}
.embeddedPlayer {
    width: 100%;
    height: 100%;
}
</style>
  