<template>
  <div>
    <div>
      <div>
        <span>{{article.title}}</span> ||
        <span>{{article.register_date_time}}</span> ||
        <span>{{article.update_date_time}}</span> ||
        <span>{{article.writer.nickname}}</span> ||
        <span>{{article.view_count}}</span> ||
        <span>{{article.like_count}}</span> ||
      </div>
      <div>
        <span>{{article.content}}</span>
      </div>
    </div>
    <ReplyList :replies="this.article.replies">

    </ReplyList>

    <div v-if="isOwner()">
      <button>
        <router-link :to="`/article/edit/${article.id}/`">Update</router-link>
      </button>
      <button @click.prevent="deleteArticle">
        Delete
      </button>
    </div>
    <AddReply />

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ReplyList from "./ReplyList";
import AddReply from "./AddReply";

export default {
  name: "Article",
  components: {AddReply, ReplyList},
  data() {
    return {
      article: null
    }
  },
  created() {
    this.FETCH_DATA();
  },
  computed: {
    ...mapGetters([
      'getUserId'
    ])
  },
  methods: {
    ...mapActions([
      'GET_ARTICLE'
    ]),
    FETCH_DATA() {
      let aid = this.$route.params.aid;
      console.log(aid);
      this.GET_ARTICLE(aid)
      .then(res => {
        this.article = res.data;
      }).catch(err => {
        this.article = err.data;
      })
    },
    isOwner() {
      let b = this.article.writer.id === this.getUserId;
      console.log("isOwner" + b);
      return b;
    },
    deleteArticle(){
      if(!this.isOwner()){
        return;
      }
    }

  }
}
</script>

<style scoped>

</style>