<template>
  <div class="navbar-wrapper">
    <div class="navbar-items">
      <div>
        Lily Jang
      </div>
      <div class="router-items">
        <div v-for="route in routes" @click="routeTo(route)" class="router-items-child">
          {{ route.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-items {
  display: flex;
  border: 2px solid white;
  justify-content: space-between;
}

.router-items-child {
  padding-right: 50px;
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
  width: 80%;
  display: flex;
  justify-content: space-between;
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
