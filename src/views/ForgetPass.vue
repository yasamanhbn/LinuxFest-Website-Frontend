<template>
  <div class="loginWrapper">
    <div class="formWrapper">
      <h1 class="formTitle">ایجاد رمز عبور جدید</h1>
      <form action class="formForm" @submit.prevent="sendResetPasswordConfirmationRequest()">
        <input
          v-model="payload.password"
          type="password"
          class="formFormInput"
          placeholder="رمز عبور خود را وارد کنید"
        />

        <div class="formFormFooter">
          <ul class="formOptionsList">
            <li>
                برای ورود 
                <router-link to="/signin">اینجا</router-link>
                را کلیک کنید.
            </li>
          </ul>
          <button class="loginButton">تغییر رمز عبور</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ForgetPass",
  data() {
    return {
      payload: {
        password: ""
      }
    };
  },
  methods: {
    sendResetPasswordConfirmationRequest: function() {
      axios({
        url: this.$store.getters.baseUrl + "users/forget/" + this.$route.params.forgetToken,
        method: "patch",
        data: this.payload
      })
        .then(response => {
          console.log(resposne);
          this.$notify({
            group: "auth",
            type: "success",
            title: "موفقیت",
            text: "رمز عبور شما با موفقیت تعویض شد. به صفحه ورود ریدایرکت می شوید...",
            duration: 6000
          });
          setTimeout(function(){
              this.$router.push('/signin')
          }, 6000)
        })
        .catch(error => {
          this.$notify({
            group: "auth",
            type: "error",
            title: "خطا",
            text : 'خطایی هنگام تعویض رمز عبور رخ داد.لطفا اتصال اینترنت خود را چک کنید'
          });
          console.log(error.response);
        });
    }
  },
  created() {
    console.log("password token to send : ", this.$route.params.forgetToken);
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.loginWrapper {
  min-height: 100vh;
  background: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.formWrapper {
  width: 550px;
  background-color: white;
  border-radius: 15px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}

.formTitle {
  font-family: "iransans";
  margin-bottom: 10px;
  color: #521c34;
}

.formForm {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.formFormInput {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 15px;
  background-color: #ddd;
  padding: 15px;
  color: #333;
  border: none;
  font-family: "iransans";
}

.formFormFooter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
}

.loginButton {
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #521c34;
  color: white;
  cursor: pointer;
  font-family: "iransans";
}

.formOptionsList {
  font-family: "iransans";
  list-style-type: disc;
  font-size: 15px;
}
</style>