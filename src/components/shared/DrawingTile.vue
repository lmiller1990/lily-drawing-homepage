<template>
  <img class="artwork-tile" :src="img" />
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
.artwork-tile {
  width: 25%;
  border: 1px solid darkgrey;
}

</style>
