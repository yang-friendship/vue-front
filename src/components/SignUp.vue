<template>
  <div>
    <form>
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" v-model="email">
        <button @click.prevent="checkEmail">중복체크</button>
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
        <label for="nickname">Username</label>
        <input type="text" name="nickname" v-model="username" @keyup="validateUsername">
      </div>

      <div>
        <label for="nickname">Nickname</label>
        <input type="text" name="nickname" v-model="nickname" @keyup="validateNickName">
      </div>

      <div>
        <label for="mobile">Mobile</label>
        <input type="tel" name="mobile" @keyup="validateMobile" v-model="mobile">
      </div>
      <div>
        <div>
          <label for="mobile_notification">mobile_notification</label>
          <input type="checkbox" name="mobile_notification"  v-model="mobile_notification">
        </div>
        <div>
          <label for="web_notification">web_notification</label>
          <input type="checkbox" name="web_notification"  v-model="web_notification">
        </div>
        <div>
          <label for="email_notification">email_notification</label>
          <input type="checkbox" name="email_notification"  v-model="email_notification">
        </div>
      </div>
      <button @click.prevent="signUp">회원가입</button>
    </form>
  </div>
</template>

<script>
import form from '../utils/Validator'
import * as api from "../api/api";

export default {
  name: "SignUp",
  data() {
    return {
      test: '',
      email: '',
      password: '',
      nickname: '',
      confirmPassword: '',
      username: '',
      mobile: '',
      web_notification:false,
      mobile_notification:false,
      email_notification:false,
      validateResult: {
        email: false,
        password: false,
        confirmPassword: false,
        username: false,
        nickname: false,
        mobile: false,
      }
    }
  },
  methods: {
    signUp() {
      console.log(this.validateResult);
    },
    validateEmail() {
      this.validateResult.email = false;
      if (!form.email(this.email)) {
        return;
      }
    },
    validatePassword() {
      this.validateResult.password = false;
      if (!form.password(this.password)) {
        console.log('Invalid Password');
        return
      }
      this.validateResult.password = true;
      return true;
    },
    validateConfirm() {
      this.validateResult.confirmPassword = false;
      if (!form.confirm(this.password, this.confirmPassword)) {
        return
      }
      this.validateResult.confirmPassword = true
    },
    validateMobile() {
      if (!form.mobile(this.mobile)) {
        return;
      }
      this.validateResult.mobile = true;
      console.log('Valid Mobile Number~');
    },
    validateUsername() {
      if (!form.username(this.username)) {
        return;
      }
      console.log('username is valid');
      this.validateResult.username = true;
    },
    validateNickName() {
      if (!form.nickname(this.nickname)) {
        return;
      }
      this.validateResult.nickname = true;
    },
    checkEmail() {
      console.log('checkEmail');
      if (this.validateEmail()) {
        return;
      }
      api.check.email(this.email)
      .then(res => {
        if(!res.isDuplicated) {
          this.validateResult.email = true
          console.log(this.validateResult.email);
          console.log('valid Email');
          return
        }
        console.log("Duplicated~");
        this.validateResult.email = false
      });
    }
  }

}
</script>

<style scoped>

</style>