<template>
    <iframe class="embeddedPlayer" src="https://open.spotify.com/embed/artist/0H4Y63FfweRZmLlIohWamc?utm_source=generator&theme=0" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</template>

<script>

export default {
    name: 'ListenPage',
}
</script>

<style>
.embeddedPlayer {
    position: relative;
    width: min(20em, 90%);
    height: 25em;
    margin: auto;
    margin-top: max( calc(50% - 12.5em), 1em);
    border: 5px solid pink;
    border-radius: 17px
}
</style>
  