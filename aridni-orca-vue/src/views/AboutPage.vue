<template>
    <div class="parchmentBox">
        <div>
            <img class="logo" src="../assets/images/logo-pink.png">
            <body>.・゜゜・✧･: *✧･:*゜・．<br/><br/>aridni_orca is a London-based artist, multi-instruentalist, producer, and composer. Her music has a distinct hybrid sound that explores electronic elements, processed environmental samples, and classical arrangements.</body>
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

.logo {
    position: relative;
    height: 15em;
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
    width: calc(100% - 10em);
    height: 100%;
    margin: auto;
    top: 10em;
    font-family: 'Luminari-Regular';
}

</style>
  