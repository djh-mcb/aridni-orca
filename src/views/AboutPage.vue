<template>
    <div class="pageBox">
        <img class="crystalSword" src="../assets/images/crystal-sword.gif">
        <div class="parchmentBox">
            <div>
                <div class="imageFlex">
                    <img class="littleCrystalSword" src="../assets/images/crystal-sword.gif">
                    <img class="indiFace" src="../assets/images/indi-face.png">
                    <img class="littleCrystalSword" src="../assets/images/crystal-sword.gif">
                </div>
                <body>.・゜゜・✧･: *✧･:*゜・．<br/><br/>aridni orca is a London-based artist, multi-instrumentalist, producer, and composer. Her music is characterised by a distinct hybrid sound that explores electronic elements, processed environmental samples, and classical arrangements.</body>
                <img class="littleLogo clickable" src="../assets/images/logo-orange.png" @click="this.$router.push({name : 'home'})">
            </div>
        </div>
        <img class="crystalSword" src="../assets/images/crystal-sword.gif">
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

.imageFlex {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    height: 35vh;
    width: 75%;
    margin: auto;
    margin-top: 15vh;   
    margin-bottom: 1.82vh;
}

.crystalSword {
    height: 70vh;
    align-self: center;
}

.littleCrystalSword {
    display: none;
}

.parchmentBox {
    height: fit-content;
    width: 45vw;
    margin-top: 2.5vh;
    background-image: url("../assets/images/parchment.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-size: 1.82vh;
}

.parchment {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
}

.indiFace {
    height: 100%;
}

.littleLogo {
    height: 11vh;
    margin-top: 1.82vh;
    margin-bottom: 15vh;
}

body {
    width: 60%;
    height: 100%;
    margin: auto;
    top: 18vh;
    font-family: 'Luminari-Regular';
    font-style: normal;
    font-size: 90%;
    color: midnightblue;
}

@media (max-width: 1025px) {
    .crystalSword {
        display: none;
    }

    .littleCrystalSword {
        display: inline;
        height: 60%;
    }

    .imageFlex {
        height: 18em;
    }

    .littleLogo {
        margin-bottom: 30vw;
        height: 25vw;
    }

    .parchmentBox {
        width: 95vw;
        font-size: 3.6vw;
    }

    .imageFlex {
        margin-top: 35vw;
    }
    
    .parchmentBox{
        margin-top: 0.5em;
    }

    body {
        width: 75%;
    }
}

</style>
  