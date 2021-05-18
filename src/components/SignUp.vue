<template>
  <div>
    <form>
      <div>
        <label for="email">Email</label>
        <input type="email" @keyup="validateEmail" name="email" v-model="email">
        <button @click.prevent="checkDuplicate">중복체크</button>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" @keypress="validatePassword" name="password" v-model="password">
      </div>

      <div>
        <label for="confirm">confirm</label>
        <input type="password" @keypress="validatePassword" confirm="email"
               v-model="confirmPassword" @keyup="validateConfirm">
      </div>

      <div>
        <label for="name">Name</label>
        <input type="text" name="name">
      </div>

      <div>
        <label for="mobile">Mobile</label>
        <input type="tel" name="mobile" @keyup="validateMobile" v-model="mobile">
      </div>
      <button @click.prevent="signUp">회원가입</button>
    </form>
  </div>
</template>

<script>
import form from '../utils/Validator'

export default {
  name: "SignUp",
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      username: '',
      mobile: '',
      validateResult: {
        email: false,
        password: false,
        confirmPassword: false,
        username: false,
        mobile: false,
      }
    }
  },
  methods: {
    signUp() {
      let entries = this.validateResult.entries;
      console.log(entries);
    },
    validateEmail() {
      if (!form.email(this.email)) {
        console.log('Invalid');
        return;
      }
      console.log('Valid~~');
    },
    validatePassword() {
      if (!form.password(this.password)) {
        console.log('Invalid Password');
        return
      }
      console.log("OKOk");
      return true;
    },
    validateMobile() {
      var patternMobile = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/;
      if (this.mobile.length < 10 || patternMobile.test(this.mobile)) {
        console.log('Invalid Mobile Number!');
        return
      }
      console.log('Valid Mobile Number~');
    },
    validateConfirm(){
      if(!form.confirm(this.password,this.confirmPassword)){
        console.log('Password is not same');
      }
      console.log('Password is same');
    },
    checkDuplicate() {
      /* api 이메일 중복확인*/
    }
  }
}
</script>

<style scoped>

</style>