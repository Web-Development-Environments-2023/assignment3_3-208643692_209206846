<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <!-- <b-row > -->
      <div v-if="this.reqSource !== '/users/MyRecipes'" :class="[orientation === 'horizontal' ? 'recipe-list-horizontal' : 'recipe-list-vertical']">
        <b-col v-for="r in recipes" :key="r.id">
          <RecipePreview class="recipePreview" :recipe="r" recipeSrc='NotMyRecipes' />
        </b-col>
      </div>
    <!-- </b-row> -->
    <!-- <b-row > -->
    <div v-else :class="[orientation === 'horizontal' ? 'recipe-list-horizontal' : 'recipe-list-vertical']">
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" recipeSrc='MyRecipes' />
      </b-col>
    </div>
    <div v-if="this.showRandomButton">
      <button class="update-button" @click="updateRecipes">Show me 3 other Random</button>
    </div>
    <!-- </b-row> -->
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    reqSource: {
      type: String,
      required: true
    },
    orientation: {
      type: String,
      default: "horizontal" // Default value is vertical
    },
    showRandomButton:{
      type:Boolean,
      default: false
    },
    sort:{
      type:String,
      required: false,
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {

    this.updateRecipes();
    

  },
  methods: {
    async updateRecipes() {
      try {
        console.log(this.reqSource);
        const response = await this.axios.get(
          this.$root.store.server_domain + this.reqSource,
          {withCredentials:true}
        );

        // console.log(response);
        this.recipes = [];
        const recipes = response.data;
        console.log(this.sort)
        if(this.sort == "Popularity (descending)")
          recipes.sort((rec1, rec2) => rec1.popularity < rec2.popularity ? 1 : -1);    
        else if(this.sort == "Preparation time (ascending)")
          recipes.sort((rec1, rec2) => rec1.readyInMinutes > rec2.readyInMinutes ? 1 : -1);

        this.recipes.push(...recipes);
        console.log(recipes)
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}

.recipe-list-horizontal {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.recipe-list-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.update-button {
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.update-button:hover {
  background-color: #45a049;
}

</style>
