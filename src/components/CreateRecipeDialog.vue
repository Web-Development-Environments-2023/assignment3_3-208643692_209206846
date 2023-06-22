<template>
  <div class="container">      
      <div class="left">                    
        <b-form @submit.prevent="onAdd" @reset.prevent="onReset">
        <b-form-group
          id="input-group-title"
          label-cols-sm="3"
          label="Recipe Title:"
          label-for="title"
        >
          <b-form-input
            id="title"
            v-model="created_recipe.title"
            type="text"
            :state="checkTitleState()"
          ></b-form-input>
        </b-form-group>
      
      <b-form-group
          id="input-group-time"
          label-cols-sm="3"
          label="Preperation Time(in minutes):"
          label-for="time"
        >
          <b-form-input
            id="time"
            v-model="created_recipe.readyInMinutes"
            type="text"
            :state="checkTimeState()"
          ></b-form-input>
  
        </b-form-group>
  
      <b-form-group
          id="input-group-dishes"
          label-cols-sm="3"
          label="Amount Of Dishes:"
          label-for="dishes"
        >
          <b-form-input
            id="dishes"
            v-model="created_recipe.servings"
            type="text"
            :state="checkDishesState()"
          ></b-form-input>
  
        </b-form-group>
  
        <b-form-group
          id="input-group-gluten"
          label-cols-sm="3"
          label="Is GlutenFree:"
          label-for="gluten"
        >
          <b-form-select
            id="gluten"
            v-model="created_recipe.glutenFree"
            :options="[true, false]"
          ></b-form-select>
        <small v-if="created_recipe.glutenFree">please make sure your recipe is indeed gluten free</small>
        </b-form-group>

        <b-form-group
          id="input-group-vegetarian"
          label-cols-sm="3"
          label="Is Vegetarian:"
          label-for="vegetarian"
        >
          <b-form-select
            id="vegetarian"
            v-model="created_recipe.vegetarian"
            :options="[true, false]"
          ></b-form-select>
        <small v-if="created_recipe.vegetarian">please make sure your recipe is indeed vegetarian</small>
        </b-form-group>
  
      <b-form-group
          id="input-group-vegan"
          label-cols-sm="3"
          label="Is Vegan:"
          label-for="vegan"
        >
          <b-form-select
            id="vegan"
            v-model="created_recipe.vegan"
            :options="[true, false]"
      ></b-form-select>
      <small v-if="created_recipe.vegan">please make sure your recipe is indeed vegan</small>
  
        </b-form-group>
      <br>
      <b-form-group>
          <b-form-input
            id="instructions"
            v-model="created_recipe.instructions"
          placeholder="Insert Your Recipe Instructions"
          
          ></b-form-input>
          <br>
          <div style="display: inline-flex;">
          <div style="padding-right:50px;"><b>Insert Ingredients:</b></div>
              <b-form-input placeholder="ingredient name" id="ingredient name" v-model="ingredientName"></b-form-input>
          <b-form-input placeholder="ingredient amount" id="ingredient amount" v-model="ingredientAmount"></b-form-input>
          </div>        
          <b-button v-b-tooltip.hover.top="'You will see added ingredients on the right!'" class="mt-2" 
            variant="primary" @click="addIngredient">Add Ingredient</b-button>        
      </b-form-group>    
      
      <!--------------------------------------------------------------------->
        <b-button type="reset" variant="danger">Reset</b-button>
        <b-button
          type="submit"
          variant="primary"
          style="width:250px;"
          class="ml-5 w-75"
          >Add Recipe</b-button
        >
        <br><br>
      </b-form>
          
  
      </div>
  
      <div class="right"><br>
        <div class="photo">
          <h5>Add a photo:<br><small>Insert a hyperlink</small></h5>        
          <input v-model="created_recipe.image" placeholder="https://img.etimg.com/thumb/msid-76085858,width-1200,height-900,imgsize-91873,overlay-etpanache/photo.jpg">
        </div>      
  
        <div class = "extendedIngredients">
          <h5>Added Ingredients:</h5>
          <ul v-if="created_recipe.extendedIngredients!=''">  
            <li class="list-group-item borderless" button variant="secondary" v-for="(i, index) in created_recipe.extendedIngredients.split('&')"
              :key="index + '_' + i"
            ><div v-if="index!=(created_recipe.extendedIngredients.split('&').length-1)">
              {{i}}
            <b-button @click="removeIng(i)" size="sm" class="ml-2" variant="danger">x</b-button>
            </div>            
            </li>
          </ul>
          <small v-else>You haven't added ingredients yet</small>      
        </div>      
      </div>                   
  
  </div>
  </template>
  
  <script>
  export default {
      name: "CreateRecipeDialog",
      components :{
          
      },
      data(){
          return {
              created_recipe: {
                  extendedIngredients: "",
                  servings: "",
                  instructions: "",
                  id: null,
                  title: "",
                  readyInMinutes: "",
                  popularity: 0,
                  glutenFree: false,
                  vegetarian: false,
                  vegan: false,
                  alreadyWatched: null,
                  inFavorites: null,
                  image: "",
                  // extendedextendedIngredients: null
              },
              ingredientName: "",
              ingredientAmount: "",
              pressed: false
          }
      },
      methods: {        
          checkTitleState(){
              if(this.pressed)
                  return this.created_recipe.title != '';
              return null;
          },
          checkTimeState(){
              if(this.pressed)
                  return this.created_recipe.readyInMinutes != '' && !isNaN(this.created_recipe.readyInMinutes);
              return null;
          },
          checkDishesState(){
              if(this.pressed)
                  return this.created_recipe.servings != '' && !isNaN(this.created_recipe.readyInMinutes);
              return null;
          },
          changeView(){
              this.pressed = false;
              this.onReset();
              this.$parent.hideRecipeModal();
          },
  
          async onAdd(){
              this.pressed = true;
              let title_state = this.checkTitleState();
              let time_state = this.checkTimeState();
              let dishes_state = this.checkDishesState();
              if(!(title_state && time_state && dishes_state)){
                  return;
              }
              if(this.created_recipe.glutenFree){
                this.created_recipe.glutenFree = 1;
              }
              else{
                this.created_recipe.glutenFree = 0;
              }
              if(this.created_recipe.vegetarian){
                this.created_recipe.vegetarian = 1;
              }
              else{
                this.created_recipe.vegetarian = 0;
              }
              if(this.created_recipe.vegan){
                this.created_recipe.vegan = 1;
              }
              else{
                this.created_recipe.vegan = 0;
              }
              await this.axios.post(          
              this.$root.store.server_domain + "/Users/createRecipe",
              this.created_recipe,
              { withCredentials:true }
              );
  
              this.changeView();
          },
          onReset(){
            this.created_recipe = {
                  extendedIngredients: "",
                  servings: "",
                  instructions: "",
                  id: null,
                  title: "",
                  readyInMinutes: "",
                  popularity: null,
                  glutenFree: false,
                  vegetarian: false,
                  vegan: false,
                  alreadyWatched: null,
                  inFavorites: null,
                  image: "",
                  // extendedextendedIngredients: null
              };
              this.ingredientName= "";
              this.ingredientAmount= "";
              this.pressed= false;
          },
          addIngredient(){
              if(this.ingredientName=="" || this.ingredientAmount=="") return;
              this.created_recipe.extendedIngredients += " " + this.ingredientName + " | " + this.ingredientAmount + " & ";
              this.ingredientName = "";
              this.ingredientAmount = "";
          },
          removeIng(ing){
            let temp = this.created_recipe.extendedIngredients.split('&');
            let index = temp.indexOf(ing);
            if(index<=-1) return;
            temp.splice(index,1);
            this.created_recipe.extendedIngredients = temp.join('&');
            if(this.created_recipe.extendedIngredients==' ') this.created_recipe.extendedIngredients = ""
            console.log(this.created_recipe.recepiePreview.image);
          }
      }
  }
  </script>
  
  <style>
  .container{
    
  }
  .right{
    
    float: right;
  }
  .left{  
    float: left;
  }
  .photo{
    padding-bottom: 30%;
  }
  .extendedIngredients{
  
  }
  </style>

<!-- <template>
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

        <label for="extendedextendedIngredients">Extended extendedIngredients:</label>
        <textarea id="extendedextendedIngredients" v-model="createRecipe.extendedextendedIngredients"></textarea>
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
        extendedextendedIngredients: ""
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
</style> -->
