<template>
    <div>
      <!-- Button to open the dialog -->
      <button @click="openRecipeDialog">Open Recipe Dialog</button>
  
      <!-- Render the RecipeDialog component when dialogVisible is true -->
      <recipe-dialog v-if="dialogVisible"
                     :recipe="recipe"
                     @close-dialog="closeRecipeDialog">
      </recipe-dialog>
    </div>
  </template>
  
  <script>
  import RecipeDialog from '../components/RecipeDialog.vue';
  
  export default {
    name: 'ButtonPage',
    components: {
      RecipeDialog,
    },
    data() {
      return {
        dialogVisible: false,
        recipe: {
          title: 'Recipe Title',
          readyInMinutes: 30,
          image: 'path/to/image.jpg',
          popularity: 5,
          vegan: true,
          vegetarian: false,
          glutenFree: true,
          instructions: 'Recipe instructions...',
          servings: 4,
          extendedIngredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
        },
      };
    },
    methods: {
      openRecipeDialog() {
        this.dialogVisible = true;
      },
      closeRecipeDialog() {
        this.dialogVisible = false;
      },
    },
  };
  </script>
  