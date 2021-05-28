<template>
  <form>

    <input v-model="content" />
    <input type="submit" value="댓글달기" @click.prevent="register">
  </form>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "AddReply",
  data() {
    return {
      content : null,
      parentId : null,
    }
  },
  methods : {
    ...mapState([
      'article'
    ]),
    register(){
      window.confirm(this.content)

    }
  }
}
</script>

<style scoped>

</style>