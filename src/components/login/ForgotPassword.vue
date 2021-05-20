<template>
    <div>
      <form>
        <div>
          <label for="">Email</label>
          <input type="email" v-model="email">
        </div>
        <div>
          <label for="">Name</label>
          <input v-model="username">
        </div>
        <div>
          <input type="submit" value="비밀번호찾기" @click.prevent="sendEmail">
        </div>
      </form>
    </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      email : '',
      username : ''
    }
  },
  methods : {
    sendEmail() {

    }
  }
}
</script>

<style scoped>

</style>