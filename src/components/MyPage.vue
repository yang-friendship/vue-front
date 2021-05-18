<template>
  <div>
    MyPage {{ accountId}}
    asdfasdf
  </div>
</template>

<script>
export default {
  name: "MyPage",
  data() {
    return {
      accountId : null
    }
  },
  created() {
    this.accountId = this.$route.params.aid;
  }
}
</script>

<style scoped>

</style>