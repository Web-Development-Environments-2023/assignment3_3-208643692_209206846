<template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.recipeId } }"
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
        <div v-if="!!$root.store.username && recipe.favorite">
          <button v-on:click="deleteFromFavorite()" class="favoriteBtnAlreadyClicked">&#11088;</button>
        </div>
        <div v-else-if="!!$root.store.username">
          <button v-on:click="addToFavorite()" class="favoriteBtn">&#11088;</button>
        </div>
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
  data() {
    return {
      image_load: false
    };
  },
  methods:{
    addToFavorite(){

    },
    deleteFromFavorite(){

    }
  },
  props: {
    recipe: {
      type: Object,
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
