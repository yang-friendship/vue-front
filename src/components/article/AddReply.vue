<template>
  <div>
    <form>
      <input name="content">
      <input type="submit" value="댓글달기">
    </form>
  </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "AddReply",
  methods : {
    ...mapActions([
    ])
  }
}
</script>

<style scoped>

</style>