<template>
  <div>
    <SearchBar @click="GET_ARTICLES"/>
    <ul v-if="articles.content && articles.content.length !==0">
      <li v-for="article in articles.content" :key="article.id">
        <router-link :to="`/articles/${article.id}`">{{ article.title }}</router-link>
        <router-link :to="`/accounts/${article.writer.id}`">{{
            article.writer.nickname
          }}
        </router-link>
      </li>
    </ul>
    <div v-else>
      <span>아무것도 없네요</span>
    </div>
    <Pageable></Pageable>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import SearchBar from "./SearchBar";
import Pageable from "../common/Pageable";

export default {
  name: "ArticleList",
  components: {SearchBar, Pageable},
  data() {
    return {}
  },
  computed: {
    ...mapState([
      'articles'
    ])
  },
  created() {
    this.GET_ARTICLE_LIST();
  }
  ,
  methods: {
    ...mapActions([
      'GET_ARTICLES'
    ]),
    GET_ARTICLE_LIST() {
      const query = this.$route.query;
      this.GET_ARTICLES(query);
    }
  }

}
</script>

<style scoped>
</style>