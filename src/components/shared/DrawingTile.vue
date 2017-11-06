<template>
  <div class="artwork-tile-wrapper">
    <img class="artwork-tile" :src="img" />
  </div>
</template>

<script>
  export default {
    name: 'DrawingTile',

    props: {
      imageLink: {
        type: Object,
        required: true
      }
    },

    computed: {
      img () {
        return `${this.imageLink.href}.${this.imageLink.ext}`
      }
    }
  }
</script>

<style scoped>
.artwork-tile-wrapper {
  display: inline-block;
}

.artwork-tile {
  width: 100%;
  border: 1px solid darkgrey;
}

</style>
