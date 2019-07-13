<template>
  <div>
    <div style="height:13px; background-image:url('design.jpg'); background-position: bottom;"></div>
    <div style="text-align: right; height:50px; line-height:50px">
      <span v-if="auth" @click="logout" style="margin-right: 30px; font-size: 25px; font-family: Sacramento, cursive; cursor: pointer">Logout</span>
    </div>
    <div id="border">
      <div id="banner" style="background-image:url('banner2.jpg');">
          <div class="josette">Josette's Bakery</div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'Navbar',
  computed: {
    auth() {
      return this.$store.state.auth
    }
  },
  methods: {
    logout() {
      Cookies.remove('auth')
      this.$store.commit('LOGIN', false)
      this.$router.push('/login')
    }
  }
}
</script>


<style scoped>
  .josette {
    font-size: 8vw;
    font-family: 'Sacramento', cursive;
    text-align: center;
    font-weight: bold;
    text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.8);
    
  }
  #banner {
    height:350px;
    background-position: center center;
    background-size: 100%; 
    background-repeat: no-repeat;
    display:flex; 
    align-items:center; 
    justify-content: center; 
  }
  #border {
    width: calc(100% - 80px);
    margin-left: 40px;
    border-bottom: dotted 4px black; 
    border-top: dotted 4px black; 
    margin-bottom:40px; 
    padding: 20px 0;
  }
</style>
