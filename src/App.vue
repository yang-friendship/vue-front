<template>
  <div id="app">
    Hello World! <br>
    {{ testData }} <br>
    Last Test
  </div>
</template>

<script>
import axios from "axios";
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

</style>
