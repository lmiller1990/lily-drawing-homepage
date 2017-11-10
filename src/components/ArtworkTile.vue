<template>
  <div class="artwork" @mouseenter="hover = true"  @mouseleave="hover = false">
    <transition name="fade" mode="out-in" key="image">
      <div :style="image" class="image" v-if="!hover">
      </div>
      <div v-else key="overlay" class="overlay">
        <div>
          Title: "tokyo tower"
        </div>
        <div>
          Price: ¥ 10 000
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'ArtworkTile',

    props: {
      imageLink: {
        type: String,
        required: false
      }
    },

    data () {
      return {
        hover: false
      }
    },

    computed: {
      image () {
        return { 'background-image': `url("${this.imageLink}")`}
      }
    },
  }
</script>

<style scoped>
.artwork {
  background-color: pink;
}

.overlay {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image {
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
