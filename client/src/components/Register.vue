<template>
    <div class="row">
      <p id="signup">Sign Up</p>
      <div id="alert" v-if="alert">
        {{alert}}
      </div>
      <form class="col s12" @submit="register">
        <div class="row">
          <div class="input-field col s12">
            <input v-model="form.username" id="username" type="text" name="username">
            <label for="username">Username</label>
            <span class="helper-text">{{error.username}}</span>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input v-model="form.password" id="password" type="password" name="password">
            <label for="password">Password</label>
            <span class="helper-text">{{error.password}}</span>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input v-model="form.code"  id="code" type="text">
            <label for="code">Code</label>
          </div>
        </div>
        <button type="submit" class="waves-effect waves-light btn">Sign Up</button>
        <br/>
        <br/>
          Already have an account ?
        <router-link to="/Login">Login</router-link>
      </form>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
import v from 'validator';
export default {
  name: 'Register',
  data () {
    return {
      alert: false,
      form: {
        username: '',
        password: '',
        code: ''
      },
      error: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    register(e) {
      let errorCount = 0
      e.preventDefault()
      Object.keys(this.error).map(field => {
        errorCount += this.validator(this.form[field], field) ? 1 : 0
      })
      if (errorCount)
        return
      if (Cookies.get('user')) {
        this.alert = 'You can only use one promo code'
        return
      }
      this.axios.post('http://localhost:5000/register', this.form)
      .then(() => {
        this.$router.push('/login')
      })
      .catch(err => {
        this.alert = err.response.data
      })

    },
    validator(str, field) {
      if (!str || !v.isAlphanumeric(str))
        return this.error[field] = "must be alphanumeric"
      if (!v.isLength(str, {min: 5, max: 12}))
        return this.error[field] = "must be between 5 and 12 char"
      return this.error[field] = ""
    }
  }
}
</script>


<style scoped>
  #welcome {
    font-size: 50px;
    text-align: center;
  }
  .helper-text {
    color: red;
  }
  #alert {
    color: red;
    margin-bottom: 10px;
    text-align: center;
  }
  #signup {
    margin-bottom: 8px;
    font-size: 40px;
    text-align: center;
    font-family: 'Sacramento', cursive;
  }
  label {
    font-size: 16px;
  }

  
</style>
