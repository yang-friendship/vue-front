<template>
  <nav class="navbar">
    <div class="logo">
      <span>Logo</span>
    </div>
    <ul class="navbar-buttons">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link to="/sign-up">Sign Up</router-link>
      </li>
      <li>
        <router-link to="/account">My Page</router-link>
      </li>
    </ul>
  </nav>
</template>

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


<script>
export default {
  name: "Navbar"
}
</script>
