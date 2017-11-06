<template>
  <div class="artwork-tile-wrapper" @mouseenter="mouseover" @mouseleave="mouseout">
    <img class="img" v-show="!mouseIsOver" src="/static/image_1.jpg" style="max-width: 100%;">
    <div class="placeholder" :style="{ 'height': height }" v-show="mouseIsOver">
      OMGOMGOMG
    </div>
  </div>
</template>

<script>
  import DrawingTileDetails from '@/components/shared/DrawingTileDetails'
  import DrawingTileImage from '@/components/shared/DrawingTileImage'
  export default {
    name: 'DrawingTile',

    props: {
      imageLink: {
        type: Object,
        required: true
      }
    },

    data () {
      return {
        mouseIsOver: false,
        height: 0
      }
    },

    components: {
      DrawingTileDetails,
      DrawingTileImage
    },

    computed: {
      img2 () {
        return `/static/image_2.${this.imageLink.ext}`
      },

      img () {
        return `${this.imageLink.href}.${this.imageLink.ext}`
      },

      details () {
        return this.mouseIsOver ? { 'opacity': '1' } : {}
      },

      image () {
        return this.mouseIsOver ? { 'opacity': '0' } : {}
      }
    },

    methods: {
      toggle () {
      },

      mouseover () {
        console.log(this.$el.querySelector('.img').height)
        this.width = this.$el.querySelector('.img').height
        console.log('Mouse over')
        this.mouseIsOver = true
      },

      mouseout () {
        console.log('mouse out')
        this.mouseIsOver = false
      }
    }
  }
</script>

<style scoped>
.artwork-tile-wrapper {
  border: 1px solid grey;
  width: 100%;
  position: relative;
}

.hidden {
  opacity: 0;
}

.image {
  width: 100%;
}
</style>
