<template>
  <router-link v-if="this.recipeSrc !== 'MyRecipes'"
    :to="{ name: 'recipe', params: { recipeId: recipe.recipeId, src:'NotMyRecipes' } }"
    class="recipe-preview"
  >
    <div class="recipe-body">
      <img v-if="image_load" :src="recipe.image" class="recipe-image" />
    </div>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <ul class="recipe-overview">
        <li>{{ recipe.readyInMinutes }} minutes</li>
        <li>{{ recipe.popularity }} likes</li>
      </ul>
      <div v-if="!!$root.store.username && recipe.favorite">
          <button v-on:click.prevent="deleteFromFavorite()" class="favoriteBtnAlreadyClicked">&#11088;</button>
      </div>
      <div v-else-if="!!$root.store.username">
        <button v-on:click.prevent=" onAddToFavorite()" class="favoriteBtn">&#11088;</button>
      </div>
    </div>
  </router-link>
  <router-link v-else
    :to="{ name: 'userRecipe', params: { recipeId: recipe.id, src:'MyRecipes' } }"
    class="recipe-preview"
  >
    <div class="recipe-body">
      <img :src="recipe.image" class="recipe-image" />
    </div>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <ul class="recipe-overview">
        <li>{{ recipe.readyInMinutes }} minutes</li>
        <li>{{ recipe.popularity }} likes</li>

      </ul>
    </div>
  </router-link>
</template>

<script>
export default {
  mounted() {
    this.axios.get(this.recipe.image).then((i) => {
      this.image_load = true;
    });
  },
  methods:{
    onAddToFavorite(){
      this.addToFavorite()
    },
    onDeleteFromFavorite(){
      this.deleteFromFavorite()
    },
    async addToFavorite(){
      try {
        console.log( this.recipe.recipeId)
        response = await this.axios.post(
            this.$root.store.server_domain +
              "/users/favorites",
            { recipe_id:this.recipe.recipeId},
            { withCredentials:true }
          );
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }


    },
    async deleteFromFavorite(){
      try {
        console.log( this.recipe.recipeId)
        response = await this.axios.delete(
            this.$root.store.server_domain +
              "/users/favorites/" + `${this.recipe.recipeId}`,
              // { recipe_id:this.recipe.recipeId},
              { withCredentials:true }
          );
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }
    }
  },
  data() {
    return {
      image_load: false
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    },
    recipeSrc: {
      type: String,
      required: true
    }

    // id: {
    //   type: Number,
    //   required: true
    // },
    // title: {
    //   type: String,
    //   required: true
    // },
    // readyInMinutes: {
    //   type: Number,
    //   required: true
    // },
    // image: {
    //   type: String,
    //   required: true
    // },
    // aggregateLikes: {
    //   type: Number,
    //   required: false,
    //   default() {
    //     return undefined;
    //   }
    // }
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

.recipe-preview {
  display: inline-block;
  width: 100%;
  max-width: 300px;
  height: auto;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 2%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.recipe-preview:hover {
  transform: translateY(-5px);
}

.recipe-body {
  width: 100%;
  height: auto;
  padding-top: 60%;
  position: relative;
}

.recipe-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.recipe-footer {
  width: 100%;
  padding: 10px;
}

.recipe-title {
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.recipe-overview {
  list-style-type: none;
  margin: 10px 0 0 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
}

.recipe-overview li {
  flex-basis: 50%;
  text-align: center;
}
</style>
