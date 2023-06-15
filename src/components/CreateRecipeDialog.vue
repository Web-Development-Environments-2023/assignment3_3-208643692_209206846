<template>
  <div>
    <button @click="openCreateDialog">Create Recipe</button>

    <Dialog v-if="showCreateDialog" :title="createDialogTitle" @close="closeCreateDialog">
      <div class="dialog-content">
        <label for="title">Title:</label>
        <input id="title" v-model="createRecipe.title" type="text" />

        <label for="readyInMinutes">Ready in Minutes:</label>
        <input id="readyInMinutes" v-model="createRecipe.readyInMinutes" type="number" />

        <label for="image">Image:</label>
        <input id="image" v-model="createRecipe.image" type="text" />

        <label for="popularity">Popularity:</label>
        <input id="popularity" v-model="createRecipe.popularity" type="number" />

        <label for="vegan">Vegan:</label>
        <input id="vegan" v-model="createRecipe.vegan" type="checkbox" />

        <label for="vegetarian">Vegetarian:</label>
        <input id="vegetarian" v-model="createRecipe.vegetarian" type="checkbox" />

        <label for="glutenFree">Gluten Free:</label>
        <input id="glutenFree" v-model="createRecipe.glutenFree" type="checkbox" />

        <label for="instructions">Instructions:</label>
        <textarea id="instructions" v-model="createRecipe.instructions"></textarea>

        <label for="servings">Servings:</label>
        <input id="servings" v-model="createRecipe.servings" type="number" />

        <label for="extendedIngredients">Extended Ingredients:</label>
        <textarea id="extendedIngredients" v-model="createRecipe.extendedIngredients"></textarea>
      </div>

      <div class="dialog-buttons">
        <button @click="saveRecipe">Save</button>
        <button @click="closeCreateDialog">Cancel</button>
      </div>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog.vue";

export default {
  data() {
    return {
      showCreateDialog: false,
      createDialogTitle: "Create Recipe",
      createRecipe: {
        title: "",
        readyInMinutes: 30,
        image: "",
        popularity: 5,
        vegan: true,
        vegetarian: false,
        glutenFree: true,
        instructions: "",
        servings: 4,
        extendedIngredients: ""
      }
    };
  },
  methods: {
    openCreateDialog() {
      this.showCreateDialog = true;
    },
    closeCreateDialog() {
      this.showCreateDialog = false;
    },
    saveRecipe() {
      // Here, you can handle the logic to save the recipe
      console.log("Recipe saved:", this.createRecipe);
      this.showCreateDialog = false;
    }
  },
  components: {
    Dialog
  }
};
</script>

<style scoped>
.dialog-content {
  margin-bottom: 20px;
}

.dialog-content label {
  display: block;
  margin-bottom: 5px;
}

.dialog-content input,
.dialog-content textarea {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}

.dialog-buttons {
  text-align: right;
}
</style>
