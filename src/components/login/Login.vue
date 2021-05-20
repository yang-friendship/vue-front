<template>
  <div>
    <form>
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password">
      </div>
      <input type="submit" @click.prevent="sendLoginForm">
    </form>
    <Forgot></Forgot>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import Forgot from "./Forgot";

export default {
  name: "Login",
  components: {Forgot},
  computed : {
    ...mapState(['user'])
  },
  data() {
    return {
      email:'',
      password : ''
    }
  },
  methods : {
    ...mapMutations([
        'SET_LOGIN_RESULT'
    ]),
    ...mapActions([
       'LOGIN'
    ]),
    sendLoginForm() {
      if(!this.email || !this.password){
        return;
      }
      const redirectUrl = this.$route.query.rPath || '/'

      this.LOGIN({email:this.email, password: this.password})
      .then(() => {
        console.log(`redirectUrl: ${redirectUrl}`);
        this.$router.push(`${redirectUrl}`)
      })
      .catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<style scoped>

</style>