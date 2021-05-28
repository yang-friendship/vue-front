<template>
  <div>
    <div>
      <ol class="page-nav">
        <li class="first"><a href="#">첫페이지</a></li>
        <li class="prev"><a href="#">이전페이지</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a class="current-page" href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li class="next"><a href="#">다음페이지</a></li>
        <li class="last"><a href="#">마지막페이지</a></li>
      </ol>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Pageable",
  computed: {
    ...mapState(["articles"])
  },
  methods: {
    printPage() {

    }
  }
}
</script>

<style scoped>
a:link { text-decoration: none;}
a:visited { text-decoration: none;}
a:hover {  text-decoration: none;}

.page-nav {
  text-align: center;
}

.page-nav li {
  display: inline-block;
  border: solid 1px;
  margin: 5px;
  text-decoration: none;
}

.current-page {
  font-size: 20px;
}

</style>