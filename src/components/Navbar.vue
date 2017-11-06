<template>
  <div class="navbar-wrapper">
    <div class="navbar-items">
      <div v-for="route in routes" @click="routeTo(route)" class="router-items-child">
        {{ route.title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-items-child {
}

.navbar-wrapper {
  width: 100%;
  height: 40px;
  background-color: #1A1A1A;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.navbar-items {
  width: 20em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.1em;
  color: white;
}
</style>

<script>
  export default {
    name: 'Navbar',

    data () {
      return {
        routes: [
          { title: 'Home', path: 'home' },
          { title: 'Drawing', path: 'drawing' },
          { title: 'Exhibitions', path: 'exhibitions' },
          { title: 'About', path: 'about' }
        ]
      }
    },

    methods: {
      routeTo (route) {
        this.$router.push(`/${route.path}`)
      }
    }
  }
</script>
