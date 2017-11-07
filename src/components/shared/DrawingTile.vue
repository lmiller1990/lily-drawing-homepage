<template>
  <div class="artwork-tile-wrapper" @mouseenter="mouseover" @mouseleave="mouseout">
    <img :class="[ mouseIsOver ? 'hidden image' : 'visible image' ]" src="/static/image_1.jpg" style="max-width: 100%;">
      <div class="placeholder" v-show="mouseIsOver">
        <div class="artwork-title">
          "Tokyo Tower"
        </div>
        <div class="price-image">
          <div>
            High Quality Print: $25
          </div>
          <div>
            Print + Framed: $35
          </div>
        </div>
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

    methods: {
      mouseover () {
        this.height = this.$el.querySelector('.image').height
        this.mouseIsOver = true
      },

      mouseout () {
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

.placeholder {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  top: 0;
  padding-top: 20%;
  height: 60%;
  width: 100%;
}

.hidden {
  opacity: 0.1;
  transition: opacity 0.5s;
}

.visible {
  opacity: 1;
  transition: opacity 0.5s;

}

.price-image {
  text-align: center;
}
</style>
