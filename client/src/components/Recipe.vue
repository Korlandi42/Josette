<template>
    <div>
        <div style="font-family: 'Sacramento', cursive; font-size: 50px; text-align: center; margin-bottom: 15px;">My Secret Croissants Recipe </div>
        <div class="box">
            <div style="font-family: 'Sacramento', cursive; font-size: 35px;">Ingredients</div>{{ingredients}}
        </div>
        <div class="box">        
            <div style="font-family: 'Sacramento', cursive; font-size: 35px;">Directions</div>{{recipe}}
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'Recipe',
  data() {
      return {
          recipe: '',
          ingredients: ''
      }
  },
  mounted() {
      this.axios.get('http://localhost:5000/recipe', {
          headers: { auth: Cookies.get('auth') }
      })
      .then((res) => {
          this.recipe = res.data.text
          this.ingredients = res.data.ingredients
      })
  }
}
</script>


<style scoped>
    .box {
        white-space: pre-wrap; padding: 10px 20px; border: dotted 4px pink; margin-bottom:20px;
        font-family:'Libre Baskerville', serif;
    }
</style>
