<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div>Likes: {{ recipe.popularity }} likes</div>
            </div>
            Ingredients:
            <ul>
              <div  v-if = "this.$route.params.src !== 'MyRecipes' ">
                <li
                  v-for="(r, index) in recipe.extendedIngredients"
                  :key="index + '_' + r.id"
                >
                  {{ r.original }}
                </li>
              </div>
              <div v-else>
                <li
                  v-for="(r, index) in recipe.extendedIngredients.split('&')"
                  :key="index + r"
                  >
                  {{ r }}
                </li>
              </div>
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <div v-if="this.$route.params.src !== 'MyRecipes'">
              <ol>
              <li v-for="s in recipe.analyzedInstructions" :key="s.number">
                {{ s.step }}
              </li>
            </ol>
            </div>
            <div v-else>
                {{ recipe.instructions }}
            </div>
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null,
    };
  },
  async created() {
    try {
      let response;
      try {
        // response = await this.axios.get(
        //   // "https://test-for-3-2.herokuapp.com/recipes/info",
        //   this.$root.store.server_domain + "/recipes/info",
        //   {
        //     params: { id: this.$route.params.id }
        //   }
        // );
        
        if (this.$route.params.src !== 'MyRecipes'){
          response = await this.axios.get(

            // "https://test-for-3-2.herokuapp.com/recipes/info",
            this.$root.store.server_domain +
              "/recipes/" +`${this.$route.params.recipeId}`,
              { withCredentials:true }
          );
        }
        else{
          response = await this.axios.get(
            // "https://test-for-3-2.herokuapp.com/recipes/info",
            this.$root.store.server_domain +
              "/users/" +`${this.$route.params.recipeId}`,
              {withCredentials:true}
          );
        }

        console.log("response data: " + response.data);
        // if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      // let {
      //   analyzedInstructions,
      //   instructions,
      //   extendedIngredients,
      //   aggregateLikes,
      //   readyInMinutes,
      //   image,
      //   title
      // } = response.data.recipe;

      // let _instructions = analyzedInstructions
      //   .map((fstep) => {
      //     fstep.steps[0].step = fstep.name + fstep.steps[0].step;
      //     return fstep.steps;
      //   })
      //   .reduce((a, b) => [...a, ...b], []);

      // let _recipe = {
      //   instructions,
      //   _instructions,
      //   analyzedInstructions,
      //   extendedIngredients,
      //   aggregateLikes,
      //   readyInMinutes,
      //   image,
      //   title
      // };

      let _recipe;

      if (this.$route.params.src !== 'MyRecipes'){
        let {
        glutenFree,
        id,
        image,
        popularity,
        readyInMinutes,
        title,
        vegan,
        vegeterian,
        analyzedInstructions,
        extendedIngredients
      } = response.data;
      
      _recipe = {
        glutenFree,
        id,
        image,
        popularity,
        readyInMinutes,
        title,
        vegan,
        vegeterian,
        analyzedInstructions,
        extendedIngredients
      };
        _recipe.analyzedInstructions = _recipe.analyzedInstructions[0].steps;
      }
      else{
        let {
        glutenFree,
        id,
        image,
        popularity,
        readyInMinutes,
        title,
        vegan,
        vegeterian,
        instructions,
        extendedIngredients
      } = response.data;
      
      _recipe = {
        glutenFree,
        id,
        image,
        popularity,
        readyInMinutes,
        title,
        vegan,
        vegeterian,
        instructions,
        extendedIngredients
      };
      }
      this.recipe = _recipe;
      console.log(this.recipe)
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.favoriteBtn {
  border-radius: 30%;
}
.favoriteBtn:hover {
  background-color: yellow;
}
.favoriteBtnAlreadyClicked{
  background-color: yellow;
}
.favoriteBtnAlreadyClicked:hover{
  background-color: rgb(255, 255, 255);
}

.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
/* .recipe-header{

} */
</style>
