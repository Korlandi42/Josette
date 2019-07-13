<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cookies from 'js-cookie'

export default {
  mounted() {
    if (Cookies.get('auth')) {
      this.axios.post('http://localhost:5000/user', {
        auth: Cookies.get('auth')
      })
      .then(res => {
        if (res) {
          this.$store.commit('LOGIN', true)
          this.$router.push('/')
        }
      })
      .catch(() => {
        this.$store.commit('LOGIN', false)
        Cookies.remove('auth')
        this.$router.push('/login')
      })
    } else {
      this.$store.commit('LOGIN', false)
    }
  },
  name: 'app',
  components: {
    Navbar,
  }
}
</script>

<style>
  body {
    background-color: #FFF4FA;
  }
</style>
