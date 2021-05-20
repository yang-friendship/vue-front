<template>
  <div>
    <form>
      <select name="type" v-model="type">
        <option value="title" selected>제목</option>
        <option value="writer">작성자</option>
        <option value="title+content">제목+내용</option>
      </select>
      <label for="keyword">검색어</label>
      <input name="keyword" v-model="keyword">
      <input type="date" value="xxx" min="yyy" max="zzz">
      <input type="submit" value="검색" @click.prevent="sendSearch">
      <select name="s" v-model="type">
        <option value="10" selected>10개씩</option>
        <option value="30">20개씩</option>
        <option value="50">50개씩</option>
      </select>
      <select name="order" v-model="type">
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
      'order' : ''
    }
  },
  methods : {
    ...mapActions([
        'GET_ARTICLES'
    ])
    ,
    sendSearch() {
      this.GET_ARTICLES({
        type: this.type,
        keyword : this.keyword
      }).
          then(() => {
      })
      this.$router.push(`/articles?type=${this.type}&keyword=${this.keyword}`);
    },
    getParams() {
      const params  = '';

    }
  }
}
</script>

<style scoped>

</style>