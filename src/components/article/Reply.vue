<template>
  <div>
    <form>
      <input name="content">
      <input type="submit" value="댓글달기">
    </form>

    <ul v-for="reply in this.$props.replies" :key="reply.id">
      <li>{{ reply }}</li>
    </ul>
  </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "Reply",
  props: ['replies'],
  methods : {
    ...mapActions([

    ])
  }
}
</script>

<style scoped>

</style>