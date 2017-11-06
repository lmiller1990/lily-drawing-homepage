<template>
  <div style="width: 100%; border: 1px solid pink;">
    <img class="artwork-tile" :src="img" />
  </div>
</template>

<script>
  export default {
    name: 'DrawingTileImage',

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
</style>
