<template>
  <div class="container">
    <h1 class="title">Family Recipes</h1>

    <div class="Rec1">
      <h2>Hanukkah Latkes by Savta Tzipora</h2>
      <p>
        Background: some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
      </p>
      <p>
        Ingrediants:
        <ul>
          <li>
            Ing1
          </li>
          <li>
            Ing2
          </li>
          <li>
            Ing3
          </li>
          <li>
            Ing4
          </li>
          <li>
            Ing5
          </li>
        </ul>
      </p>
      <p>
        Instructions:
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
      </p>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
    <br><br>
    
    <div class="Rec2">
      <h2>Chicken Soup by Savta Shosh</h2>
      <p>
        Background: some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
      </p>
      <p>
        Ingrediants:
        <ul>
          <li>
            Ing1
          </li>
          <li>
            Ing2
          </li>
          <li>
            Ing3
          </li>
          <li>
            Ing4
          </li>
          <li>
            Ing5
          </li>
        </ul>
      </p>
      <p>
        Instructions:
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
      </p>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
    <br><br>

    <div class="Rec3">
      <h2>Cheesecake by Savta Tzipora</h2>
      <p>
        Background: some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
      </p>
      <p>
        Ingrediants:
        <ul>
          <li>
            Ing1
          </li>
          <li>
            Ing2
          </li>
          <li>
            Ing3
          </li>
          <li>
            Ing4
          </li>
          <li>
            Ing5
          </li>
        </ul>
      </p>
      <p>
        Instructions:
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
        some text some text some text some text some text <br>
      </p>
      <br><br><br><br><br><br><br><br>
    </div>
  </div>
</template>


  <script>
  export default {
    components: {
    }
  };
  </script>
  
  <style lang="scss" scoped>
//  .container {
//   background-image: url('../assets/family_eating.jpg');
//   /* Additional background styles */
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   height: 100%;
// }

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

  .Rec1{
    background-image: url('../assets/Hanukkah Latkes.jpeg');
    background-size: cover;
  }

  .Rec2{
    background-image: url('../assets/Chicken.jpg');
    background-size: cover;
  }

  .Rec3{
    background-image: url('../assets/Cheese.jpg');
    background-size: cover;
  }
  
  </style>