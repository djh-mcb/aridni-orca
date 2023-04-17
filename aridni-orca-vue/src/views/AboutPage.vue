<template>
    <div class="parchmentBox">
        <div>
            <img class="indiFace" src="../assets/images/indi-face.png">
            <body>.・゜゜・✧･: *✧･:*゜・．<br/><br/>aridni orca is a London-based artist, multi-instrumentalist, producer, and composer. Her music is characterised by a distinct hybrid sound that explores electronic elements, processed environmental samples, and classical arrangements.</body>
        </div>
    </div>
</template>

<script>

export default {
    name: 'WatchPage',
}
</script>

<style scoped>
.parchmentBox {
    position: relative;
    height: 53em;
    width: 40em;
    margin: auto;
    margin-top: 1em;
    background-image: url("../assets/images/parchment.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.parchment {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
}

.indiFace {
    position: relative;
    height: 20em;
    margin: auto;
    margin-top: 25%;   
    margin-bottom: 2em;
}

@font-face {
    font-family: 'Luminari-Regular';
    font-style: normal;
    font-weight: normal;
    src: url('../assets/fonts/Luminari-Regular.woff') format('woff');
}

body {
    width: calc(100% - 15em);
    height: 100%;
    margin: auto;
    top: 10em;
    font-family: 'Luminari-Regular';
    color: midnightblue;
}

</style>
  