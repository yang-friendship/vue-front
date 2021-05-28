<template>
  <div>
    <form>
      <label for="type">검색타입</label>
      <select name="type" v-model="type">
        <option value="title" selected>제목</option>
        <option value="writer">작성자</option>
        <option value="title+content">제목+내용</option>
      </select>
      <label for="keyword">검색어</label>
      <input name="keyword" v-model="keyword">
      <input type="submit" value="검색" @click.prevent="sendSearch">
      <select name="size" v-model="size">
        <option value="10" selected>10개씩</option>
        <option value="30">20개씩</option>
        <option value="50">50개씩</option>
      </select>
      <select name="order" v-model="order">
        <option value="desc" selected>최신순</option>
        <option value="asc">오래된순</option>
      </select>
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "SearchBar",
  data() {
    return {
      'type': '',
      'keyword' : '',
      'order' : 'desc',
      'size' : 10,
      'page' : 1
    }
  },
  methods : {
    ...mapActions([
        'GET_ARTICLES'
    ])
    ,
    sendSearch() {
      console.log(this.$data);
      this.GET_ARTICLES(
          this.$data
      ).
          then(() => {
      })
      this.$router.push(`/articles?type=${this.type}&keyword=${this.keyword}`);
      let search = location.search;
      console.log(search);

    },
    getParams() {

    }
  }
}
</script>

<style scoped>

</style>