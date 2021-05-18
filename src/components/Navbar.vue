<template>
  <nav class="navbar">
    <div class="logo">
      <span>Logo</span>
    </div>
    <ul class="navbar-buttons">
      <li>
        <router-link  to="/">Home</router-link>
      </li>
      <li>
        <router-link  to="/articles">Articles</router-link>
      </li>
      <li v-if="!isLogin">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="!isLogin">
        <router-link to="/sign-up">Sign Up</router-link>
      </li>
      <li>
        <router-link v-if="isLogin" :to="`/accounts/${this.getUserId}`">My Page</router-link>
      </li>
      <li>
        <a v-if="isLogin" href="" @click.prevent="logout">Logout</a>
      </li>
    </ul>
  </nav>
</template>


<script>
import {mapGetters} from "vuex";
import * as api from "../api/api";

export default {
  name: "Navbar",
  watch : {
    checkLogin(){

    }
  },
  computed : {
    ...mapGetters([
        'isLogin',
        'getUserId'
    ]),
  },
  methods : {
    logout() {
      console.log("logout");
      api.security.logout();
      this.$router.push('/login')
    }
  }
}
</script>


<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #F30;
}

.navbar {
  background-color: #42b983;
  display: flex;
  justify-content: space-between;
  height: 70px;
}

.navbar-buttons {
  margin-right: 30px;
  display: flex;
}

.navbar-buttons li {
  list-style: none;
  margin: 10px;
}

.navbar-buttons li a:hover {
  color: aliceblue;
}


</style>

