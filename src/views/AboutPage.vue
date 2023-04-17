<template>
    <div class="pageBox">
        <img class="crystalSword" src="../assets/images/crystal-sword.gif">
        <div class="parchmentBox">
            <div>
                <img class="indiFace" src="../assets/images/indi-face.png">
                <body>.・゜゜・✧･: *✧･:*゜・．<br/><br/>aridni orca is a London-based artist, multi-instrumentalist, producer, and composer. Her music is characterised by a distinct hybrid sound that explores electronic elements, processed environmental samples, and classical arrangements.</body>
                <img class="littleLogo clickable" src="../assets/images/logo-orange.png" @click="this.$router.push({name : 'home'})">
            </div>
        </div>
        <img class="crystalSword imageFlip" transform=scaleX(-1) src="../assets/images/crystal-sword.gif">
    </div>
</template>

<script>

export default {
    name: 'WatchPage',
}
</script>

<style scoped>
.pageBox {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.crystalSword {
    height: 40em;
    align-self: center;
}

.imageFlip {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}

.parchmentBox {
    height: 53em;
    width: 40em;
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
    margin-top: 8em;   
    margin-bottom: 1em;
}

.littleLogo {
    height: 6em;
    margin-top: 1em;
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
    font-style: normal;
    font-size: 90%;
    color: midnightblue;
}

</style>
  