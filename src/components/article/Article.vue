<template>
  <div>
    Article Details Page <br>
    <div>
      {{ article }}
    </div>
    <div v-if="isOwner()">
      <button>
        <router-link :to="`/article/edit/${article.id}/`">Update</router-link>
      </button>
      <button @click.prevent="deleteArticle">
        Delete
      </button>
    </div>

    <Reply></Reply>


  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Reply from "./Reply";

export default {
  name: "Article",
  components: {Reply},
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