<template>
  <div class="artwork" @mouseenter="hover = true"  @mouseleave="hover = false">
    <transition name="fade" mode="out-in" key="image">
      <div v-if="!hover">
        <img :src="imageLink" class="image" />
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
    }
  }
</script>

<style scoped>
.artwork {
  background-color: #444;
  color: #FFF;
}

.overlay {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image {
  max-width: 100%;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
