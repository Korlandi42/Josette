<template>
    <div class="row">
      <p id="login">Login</p>
      <form class="col s12" @submit="fetchToken">
        <div class="row">
          <div class="input-field col s12">
            <input v-model="form.username" id="last_name" type="text">
            <label for="last_name">Username</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input v-model="form.password" id="password" type="password">
            <label for="password">Password</label>
          </div>
        </div>
        <div id="alert" v-if="alert">
          {{message}}
        </div>
        <button type="submit" class="waves-effect waves-light btn">Log In</button>
        <br/>
        <br/>
          Don't have an account ?
        <router-link to="/Register">Sign Up</router-link>
      </form>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'Login',
  data () {
    return {
      alert: false,
      message: '',
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    fetchToken(e) {
      e.preventDefault()
      this.axios.post('http://localhost:5000/login', this.form)
      .then(res => {
          this.$store.commit('LOGIN', true)
          Cookies.set('auth', res.data)
          Cookies.set('user', true)
          this.$router.push('/')
      })
      .catch(err => {
        this.alert = true
        this.message = err.response.data
      })
    }
  }
}
</script>


<style scoped>
  #welcome {
    font-size: 50px;
    text-align: center;
  }
   #alert {
    color: red;
    margin-bottom: 10px;
    text-align: center;
  }
  #login {
    margin-bottom: 8px;
    font-size: 40px;
    text-align: center;
    font-family: 'Sacramento', cursive;
  }
  label {
    font-size: 16px;
  }

</style>
