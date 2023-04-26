<template>
  <div class="showsPaneBox">
    <NavigationPane class="showsPane" source="shows-image.webp" accentColor="#bcb9af" text="shows" @click="showInfo= true"/>
    <div v-show="showInfo" class="parchmentBackground"></div>
    <div v-show=showInfo class="showsTextBox">
      <div class="showsText">
        <br>゜・future * ✧<br><br>tba<br><br>✧: * past ゜:<br><br>evade house at madrid fashion week<br>19/9/22 <br><br>peckham audio<br>13/4/23
        <div class="swords">
          <img class="crystalSword" src="../assets/images/crystal-sword.webp">
        </div>
      </div>
    </div>
    <ImagePane v-show=showInfo class="returnToVideoButton clickable" source="shows-image.webp" accentColor="#bcb9af" @click="showInfo= false"/>
  </div>
</template>

<script>
import NavigationPane from './NavigationPane.vue';
import ImagePane from './ImagePane.vue';

export default {
  name: 'ShowsPane',
  components: {
    NavigationPane,
    ImagePane
  },
  data() {
    return {
      showInfo: false
    }
  }
}
</script>

<style scoped>
.showsPaneBox {
  position: relative;
}

.parchmentBackground {
  width: calc(100% - var(--border-size) * 2 + 2px);
  height: calc(100% - var(--border-size) * 2 + 2px);
  position: absolute;
  top: calc(var(--border-size) - 1px);
  left: calc(var(--border-size) - 1px);
  background-image: url("../assets/images/parchment.webp");
  background-position: center;
  background-size: 200% 200%;
}

.showsTextBox {
  width: calc(100% + var(--border-size) + 2px);
  height: calc(100% - var(--border-size) * 2 + 2px);
  margin-top: calc(var(--border-size) - 1px);
  margin-left: calc(var(--border-size) - 1px);
  position: absolute;
  top: 0;
  left: 0;
  overflow: auto;
  scrollbar-color: transparent transparent;
  font-family: 'Luminari-Regular';
  font-style: normal;
  color: midnightblue;
}

@media (pointer:none), (pointer:coarse) {
  .showsTextBox {
    width: calc(100% - var(--border-size) * 2 + 2px);
  }
}

.showsTextBox:hover {
  scrollbar-color: #bcb9af transparent;
}

.showsText {
  width: calc(100% - var(--border-size) + 2px);
}

.showsPane {
  width: 100%;
  height: 100%;
}

.returnToVideoButton {
  position: absolute;
  width: 30%;
  top: calc(70% + var(--border-size) - 1px);
  left: 0;
}

.swords {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 2em;
  margin-bottom: 2em;
}
.crystalSword {
  position: relative;
  width: 15%;
}
</style>