<template>
  <div class="artwork" @mouseenter="hover = true" @mouseleave="hover = false">
    <div class="overlay" v-if="hover">
      Buy me...
    </div>
    <div class="main" v-else="hover">
      Element: {{ el }}
      Hover: {{ hover }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Test',

    props: ['el'],

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
  padding: 20px;
}
</style>
