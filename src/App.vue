<template>
  <div id="app">
    <!--<Navbar />
    <router-view/>-->
    <div class="outer">
      <div class="wrapper">
        <div class="header">Header</div>
        <Test v-for="el in arr" :el="el" key="el" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 940px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 10px;
}

.header {
  background-color: #444;
  color: #FFF;
  padding: 20px;
}

.header {
  grid-column: 1 / -1;
}

#app {
}
</style>

<script>
import Test from './Test'
import Navbar from '@/components/Navbar'
export default {
  name: 'app',

  components: {
    Navbar,
    Test
  },

  data () {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  }
}
</script>

