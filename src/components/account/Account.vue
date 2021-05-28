<template>
  <div>
    <div>

      <div><span>{{ account.id}}</span></div>
      <div><span>{{ account.username}}</span></div>
      <div><span>{{ account.nickname}}</span></div>
      <div><span>{{ account.email}}</span></div>
      <div><span>{{ account.role}}</span></div>

    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import * as api from "../../api/api";
export default {
  name: "MyPage",
  data() {
    return {
      account: null
    }
  },
  created() {
    this.accountId = this.$route.params.aid;
    api.account.fetch(this.accountId)
    .then(res => {
      this.account = res.data;
    })
  },
  methods : {
    ...mapActions([
        'GET_ACCOUNT'
    ])
  }
}
</script>

<style scoped>

</style>