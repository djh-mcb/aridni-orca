<template>
  <ImagePane class="clickable" v-bind:source="currentSource" v-bind:accentColor="currentColor" @click="incrementPane()"/>
</template>

<script>
import ImagePane from './ImagePane.vue';

export default {
  name: 'CyclingImagePane',
  props: {
    panes: Array,
  },
  data() {
    return {
      paneIndex: 0,
    }
  },
  computed: {
    currentSource() {
      return this.panes[this.paneIndex].source;
    },
    currentColor() {
      return this.panes[this.paneIndex].accentColor;
    }
  },
  components: {
    ImagePane,
  },
  methods: {
    incrementPane() {
      this.paneIndex = (this.paneIndex + 1) % this.panes.length;
    }
  } 
}
</script>