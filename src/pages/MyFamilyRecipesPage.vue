<template>
  <div class="container">
    <h1 class="title" style="text-align: center;">Family Recipes</h1>

    <div class="recipe-container">
    <!-- Recipe 1 -->
      <div class="recipe-card">
        <img class="recipe-image" src="../assets/Hanukkah Latkes.jpeg" alt="Recipe 1">
        <div class="recipe-title">Hanukkah Latkes by Savta Tzipora</div>
        <div class="recipe-description">
          This recipe is traditionally made on Hanukkah.
        </div>
        <ul class="recipe-ingredients">
          <li>1 1/2 kg Potatoes</li>
          <li>2 Onions</li>
          <li>4 Eggs</li>
          <li>2 Tablespoon salt</li>
          <li>1/2 Cup Flour</li>
          <li>1 Cup Frying Oil</li>
          <li>Sour Cream</li>
        </ul>
        <div class="recipe-description">
          Put potatoes and onions in a food processor, add eggs and salt to the mixture.
          Pour the flour and mix, fry in a large pan.
        </div>
      </div>

      <!-- Recipe 2 -->
      <div class="recipe-card">
        <img class="recipe-image" src="../assets/Chicken.jpg" alt="Recipe 2">
        <div class="recipe-title">Chicken Soup by Savta Shosh</div>
        <div class="recipe-description">
          This recipe is traditionally made whenever someone is sick or if it's cold outside.
        </div>
        <ul class="recipe-ingredients">
          <li>300 Grams Chicken Drumstick</li>
          <li>1 Large Onion</li>
          <li>2-3 Garlic Cloves, Crushed</li>
          <li>1 Celery Roots</li>
          <li>3 Chicken Stock Cubes</li>
          <li>Water</li>
          <li>2 Carrots</li>
          <li>4 Potatoes, Pealed</li>
        </ul>
        <div class="recipe-description">
          Put ingredients in a large pot and let it cook for about an hour (until flavours are mixed
          and vegetables are soft).
        </div>
      </div>

      <!-- Recipe 3 -->
      <div class="recipe-card">
        <img class="recipe-image" src="../assets/Cheese.jpg" alt="Recipe 3">
        <div class="recipe-title">Cheesecake by Savta Tzipora</div>
        <div class="recipe-description">
          This recipe is traditionally made on birthdays.
        </div>
        <ul class="recipe-ingredients">
          <p>For the base</p>
          <li>50 Grams Margarine</li>
          <li>1 Cup Self-Raising Flour</li>
          <li>1/2 Cup Sugar</li>
          <li>1 Egg</li>
          <br>
          <p>For the stuffing</p>
          <li>3 Packages Cream Cheese-2 of 5% and 1 of 9%</li>
          <li>1 Cup Sugar</li>
          <li>3 Spoons Flour</li>
          <li>2 Spoons Lemon Zest</li>
          <li>1/2 Tablespoon Vanilla Extract</li>
          <li>3 Eggs</li>
          <br>
          <p>For the crumbs</p>
          <li>50 Grams Margarine</li>
          <li>4 Spoons Self-Raising Flour</li>
          <li>3 Spoons Sugar</li>
        </ul>
        <div class="recipe-description">
          Mix all base ingredients, pour the blend inside a baking dish and refrigerate for 20 minutes.
          For the stuffing, separate egg whites from yolks, mix everything but the yolks that will later
          be used for whipped cream. Bake for 20 minutes and in the meantime make crumbs.
          Pour the crumbs and bake for an extra 40 minutes.
        </div>
      </div>
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
  .recipe-container {
      display: flex;
      justify-content: space-around;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    /* Style each individual recipe div */
    .recipe-card {
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 20px;
      margin: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    /* Style the recipe image */
    .recipe-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    /* Style the recipe title */
    .recipe-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    /* Style the recipe description */
    .recipe-description {
      font-size: 14px;
      color: #666;
    }

    /* Style the recipe ingredients list */
    .recipe-ingredients {
      margin-top: 10px;
    }

    /* Style the recipe ingredient items */
    .recipe-ingredients li {
      list-style-type: disc;
      margin-left: 20px;
    }
  
  </style>