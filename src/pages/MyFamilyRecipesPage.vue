<template>
  <div class="container">
    <h1 class="title">Family</h1>
  </div>
</template>


  <script>
  export default {
    // props:{
    //   recipes:{
    //     default:[
    //             {
    //                 "recipeId": 764752,
    //                 "title": "Cinnamon French Toast Sticks",
    //                 "readyInMinutes": 45,
    //                 "image": "https://spoonacular.com/recipeImages/764752-556x370.jpg",
    //                 "popularity": 4,
    //                 "vegan": false,
    //                 "vegetarian": true,
    //                 "glutenFree": false,
    //                 "favorite": false,
    //                 "watched": false
    //             },
    //             {
    //                 "recipeId": 637670,
    //                 "title": "Cheesy Pasta in a Pot",
    //                 "readyInMinutes": 45,
    //                 "image": "https://spoonacular.com/recipeImages/637670-556x370.jpg",
    //                 "popularity": 2,
    //                 "vegan": false,
    //                 "vegetarian": false,
    //                 "glutenFree": false,
    //                 "favorite": false,
    //                 "watched": false
    //             },
    //             {
    //                 "recipeId": 641063,
    //                 "title": "Curried Cauliflower Gratin",
    //                 "readyInMinutes": 45,
    //                 "image": "https://spoonacular.com/recipeImages/641063-556x370.jpg",
    //                 "popularity": 8,
    //                 "vegan": false,
    //                 "vegetarian": true,
    //                 "glutenFree": false,
    //                 "favorite": false,
    //                 "watched": false
    //             }
    //         ]
    //   },
    // },
    // data(){
    //   return{

    //   }
    // },
    components: {
    }
  };
  </script>
  
  <style lang="scss" scoped>
 .container {
  background-image: url('../assets/family_eating.jpg');
  /* Additional background styles */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
}

  .RandomRecipes {
    margin: 10px 0 10px;
  }
  .blur {
    -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
    filter: blur(2px);
  }
  ::v-deep .blur .recipe-preview {
    pointer-events: none;
    cursor: default;
  }
  </style>