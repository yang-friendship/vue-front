<template>
  <div id="app">
      <header>
      <Navbar />
      </header>
    <div class="container">
    <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {

  name: 'App',
  data() {
    return {
      testData : {}
    }
  },
  components: {
    Navbar
  },
}
</script>

<style>

.container {
  width: 1240px;
  margin: 0 auto;
  border: 5px solid;
  height: 100%;
}

</style>
