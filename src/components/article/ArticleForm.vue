<template>
  <form>

    <div>
      <label for="title">Title</label>
      <input type="text" v-model="title">
    </div>
    <div>
      <label for="content">content</label>
      <input type="content" v-model="content">
    </div>
    <div>
      <input type="submit" @click.prevent="register">
    </div>

  </form>
</template>

<script>
import {mapActions, mapMutations} from "vuex";

export default {
  name: "ArticleForm",
  data() {
    return {
      title: '',
      content: '',
      fileNumbers: []
    }
  },
  methods: {
    ...mapActions([
      'REGISTER_ARTICLE'
    ]),
    ...mapMutations(['SET_ARTICLE'])
    ,
    register() {
      if (!this.title || !this.content) {
        return;
      }
      this.REGISTER_ARTICLE(
          {title: this.title, content: this.content, file_numbers: this.fileNumbers})
          .then(res => {
            this.$router.push(`/articles/${res.data.id}`)
          })
    }
  }
}
</script>

<style scoped>

</style>