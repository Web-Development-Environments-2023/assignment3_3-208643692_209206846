<!-- <template>
  <div>
    <h1 class="title" 
      style="padding-top: 20px; padding-left: 5px; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;">
      Search Recipes
    </h1>
    <div style="display: inline-block; width: 100%">
      <div class="form" style="float: left; padding-left: 10px; padding-right: 12px;">
      <b-form @submit.stop.prevent> <br>        
        <b-form-input class="pl-3" placeholder="Search here" v-model="selection.search_string" id="querystring" ></b-form-input>
        <b-form-text class="pl-3" id="help-block">
          In case of adding filtering the search will only consist of spooncular results!
        </b-form-text>
      </b-form>
      </div>
      <div style="padding-right: 10px;" id="dropdowns" class="d-flex pt-4">
      <multiselect 
        v-model="selection.selected_cuisines"
        :options="options.cuisines"
        placeholder="No cuisines to exclude"
        style="max-width: 200px"
        multiple
        size="lg">      
      </multiselect>
      <multiselect
        v-model="selection.selected_intolerances"
        :options="options.intolerance"
        placeholder="No intolerances"
        style="max-width: 200px"
        multiple>      
      </multiselect>
          <multiselect
        v-model="selection.selected_diet"
        :options="options.diets"
        style="max-width: 200px"
        placeholder="Any diet"
        
        >      
      </multiselect>
      <multiselect
        v-model="selection.selected_amount"
        :options="[5,10,15]"
        placeholder="select amount of results"
        style="max-width: 200px"
        :allowEmpty="false"
        >      
      </multiselect>    
      </div>    
    </div>    
      <multiselect
      v-model="selection.sorting"
      :options="['Popularity (descending)','Preperation time (ascending)']"
      placeholder="select to sort"
      style="max-width: 300px; left: 43%; right: auto;"      
      :allowEmpty="true"
      >      
    </multiselect>  
    <div class="d-flex justify-content-center pt-3">    
      <b-button @click="Submit"  variant="success" >Search</b-button>
    </div>
    
    <div class="resultsWrapper">
      <RecipePreviewList id="searchResult" v-if="did_search"
      title="Search Results" :reqSource= 'search_query' :sort="selection.sorting"
      :class="{
        RandomRecipes: true,
        blur: !$root.store.username,
        center: true
      }"
      disabled
    ></RecipePreviewList>
    </div>
  </div>
</template> -->

<template>
  <div>
    <h1 class="title">
      Search Recipes
    </h1>
    <div>
      <div class="form">
        <form @submit.stop.prevent>
          <br>        
          <input class="pl-3" type="text" placeholder="Search here" v-model="selection.search_string" id="querystring">
        </form>
      </div>
      <div id="dropdowns" class="d-flex pt-4">
        <select v-model="selection.selected_cuisines" multiple>
          <option v-for="cuisine in options.cuisines" :value="cuisine" :key="cuisine">{{ cuisine }}</option>
        </select>
        <select v-model="selection.selected_intolerances" multiple>
          <option v-for="intolerance in options.intolerance" :value="intolerance" :key="intolerance">{{ intolerance }}</option>
        </select>
        <select v-model="selection.selected_diet">
          <option value="">Any diet</option>
          <option v-for="diet in options.diets" :value="diet" :key="diet">{{ diet }}</option>
        </select>
        <select v-model="selection.selected_amount">
          <option v-for="amount in [5, 10, 15]" :value="amount" :key="amount">{{ amount }}</option>
        </select>
        <select v-model="selection.sorting">
        <option value="">Select to sort</option>
        <option value="Popularity (descending)">Popularity (descending)</option>
        <option value="Preparation time (ascending)">Preparation time (ascending)</option>
      </select>
      </div>    
    </div>    
    <div class="d-flex justify-content-center pt-3">    
      <button @click="Submit" class="btn btn-success">Search</button>
    </div>
    
    <div class="resultsWrapper">
      <RecipePreviewList id="searchResult" v-if="did_search"
        title="Search Results" :reqSource='search_query' :sort="selection.sorting"
        :class="{
          RandomRecipes: true,
          blur: !$root.store.username,
          center: true
        }"
        disabled
      ></RecipePreviewList>
    </div>
  </div>
</template>



<script>
  import RecipePreviewList from '../components/RecipePreviewList.vue';
  export default {
    components: { RecipePreviewList },
    data () {
      return {      
        options:{
          cuisines:[],
          diets: [],
          intolerance : [],
        },        
        selection:{
            selected_diet: '',
            selected_cuisines:[],
            selected_intolerances:[],
            selected_amount: 5,
            search_string: '',
            sorting: ''
        },        
        did_search: false,
        search_query: ''     
      }
    },
    mounted () {
        this.getOptions();
        this.search_query = localStorage.getItem("search_query")
        if(this.search_query!=null) this.did_search = true;
        else this.search_query = ""
    },
    methods:
    {
      async getOptions(){
        try {
          const response = await this.axios.get(
            this.$root.store.server_domain + '/recipes/Options/RecipeSearch', 
            {withCredentials: true}
          );
          const cuisines = response.data.cousines;
          const diets = response.data.diets;
          const intolerance = response.data.intolerances;
          this.options.cuisines = cuisines;
          this.options.diets = diets;
          this.options.intolerance = intolerance;
          // console.log(this.recipes);
        } catch (error) {
          console.log(error);
        }
      },
      Submit(){
        this.did_search = false;
        this.$nextTick(()=>{
          this.search_query = '/recipes/searchRecipes?amount='+this.selection.selected_amount+'&search='+this.selection.search_string;
        for(let cuisine of this.selection.selected_cuisines){
          this.search_query += ('&cousine=' + cuisine);
        }
        if(this.selection.selected_diet!='' && this.selection.selected_diet!=null) this.search_query+=('&diet=' + this.selection.selected_diet)        
        for(let into of this.selection.selected_intolerances){
          this.search_query += ('&intollerances=' + into);
        }
        var ls = localStorage.setItem("search_query", this.search_query);
        this.did_search = true;
        });
        
      }
    }    
  }
</script>
<style>
  .title {
    font-family: 'Impact', Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 36px;
    padding-top: 40px;
    padding-left: 5px;
    color: #8d362b;
    text-align: center;
  }

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  input[type="text"] {
    height: 48px;
    padding-left: 12px;
    font-size: 18px;
    border: 2px solid #8d362b;
    border-radius: 6px;
    background-color: #f2e7de;
    color: #8d362b;
    width: 300px;
    outline: none;
    transition: border-color 0.3s ease;
  }

  input[type="text"]:focus {
    border-color: #b55e40;
  }

  #dropdowns {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;
    gap: 10px;
  }

  select {
    height: 48px;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #8d362b;
    border-radius: 6px;
    background-color: #f2e7de;
    color: #8d362b;
    outline: none;
    transition: border-color 0.3s ease;
  }

  select[multiple] {
    height: auto;
  }

  select:focus {
    border-color: #b55e40;
  }

  .d-flex {
    display: flex;
  }

  .justify-content-center {
    justify-content: center;
  }

  .pt-3 {
    padding-top: 24px;
  }

  .btn {
    background-color: #8d362b;
    color: #fff;
    font-size: 18px;
    border: none;
    border-radius: 6px;
    padding: 12px 24px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #b55e40;
  }

  .btn:active {
    background-color: #6e2e23;
  }

  .resultsWrapper {
    text-align: center;
    margin-top: 40px;
  }

  .RandomRecipes {
    margin-top: 20px;
  }

  body {
    background-color: #f9f5f3;
    color: #333;
    font-family: Arial, sans-serif;
  }

  /* Media Queries */
  @media (max-width: 768px) {
    .form {
      flex-direction: column;
      align-items: stretch;
    }

    #dropdowns {
      flex-wrap: wrap;
      justify-content: center;
    }

    select {
      margin-bottom: 10px;
    }
  }
</style>
