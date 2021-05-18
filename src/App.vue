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
import axios from "axios";
import Navbar from "./components/Navbar";
export default {

  name: 'App',
  data() {
    return {
      testData : {}
    }
  },
  created() {
    this.sendApi()
  },
  components: {
    Navbar
  },
  methods : {
    sendApi() {
      axios.request('http://localhost:8001/test')
      .then(res => {
        this.testData = res.data
        console.log(res.data);
      })
      .catch( e => {
        console.log(e);
      })
    }
  }
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
