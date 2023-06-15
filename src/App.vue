<template>
  <div id="app">
    <header>
      <div class="header-container">
        <div class="header-left">
          <router-link :to="{ name: 'main' }" class="logo">Vue Recipes</router-link>
          <router-link :to="{ name: 'search' }">Search</router-link>
          <router-link :to="{ name: 'about' }">About</router-link>
        </div>
        <div class="header-right">
          <div v-if="!!$root.store.username" class="dropdown">
            <button class="dropdown-button">Personal</button>
            <div class="dropdown-content">
              <tr><router-link :to="{ name: 'favoriteRecipes' }">My Favorites</router-link></tr>
              <tr><router-link :to="{ name: 'myRecipes' }">My Recipes</router-link></tr>
              <tr><router-link :to="{ name: 'familyRecipes' }">My Family Recipes</router-link></tr>
              <!-- <tr><CreateRecipeDialog/></tr> -->
            </div>
          </div>
          <div v-if="!$root.store.username" class="guest-section">
            <span>Guest:</span>
            <router-link :to="{ name: 'register' }">Register</router-link>
            <router-link :to="{ name: 'login' }">Login</router-link>
          </div>
          <div v-else class="user-section">
            <span>{{ $root.store.username }}:</span>
            <button @click="Logout">Logout</button>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="hero-section">
        <h1 class="hero-title">Delicious Recipes</h1>
        <p class="hero-description">Discover a world of mouthwatering recipes for every occasion.</p>
      </div>
      <router-view />
    </main>
    <footer>
      <div class="footer-container">
        <div class="footer-left">
          <p>&copy; 2023 Vue Recipes. All rights reserved.</p>
        </div>
        <div class="footer-right">
          <router-link :to="{ name: 'about' }">About</router-link>
          <router-link :to="{ name: 'contact' }">Contact</router-link>
          <router-link :to="{ name: 'privacy' }">Privacy Policy</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
// import CreateRecipeDialog from './components/CreateRecipeDialog.vue';

export default {
  name: "App",
  data() {
    return {
      isLogged: !!this.$root.store.username,
    };
  },
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  },
  components:{
    // CreateRecipeDialog,
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

header {
  background-color: #f8f8f8;
  padding: 10px 20px;
  border-bottom: 2px solid #f2f2f2;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  margin-right: 20px;
}

header a {
  color: #333;
  text-decoration: none;
  margin-right: 10px;
  font-weight: bold;
}

.header-right {
  display: flex;
  align-items: center;
}

.dropdown {
  position: relative;
  margin-right: 10px;
}

.dropdown-button {
  background-color: #19e7c1;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  color: #fff;
  font-weight: bold}


  .dropdown-button:hover {
  background-color: #19e7c1;
  border-radius: 20%;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  border-radius: 4px;
  padding: 10px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.guest-section span {
  margin-right: 10px;
  font-weight: bold;
}

.user-section span {
  margin-right: 10px;
  font-weight: bold;
  color: #333;
}

.user-section button {
  background-color: #19e7c1;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
}

.user-section button:hover {
  background-color: #19e7c1;
  border-radius: 20%;
}

main {
  padding: 20px;
}

.hero-section {
  background-color: #19e7c1;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
}

.hero-title {
  font-size: 36px;
  margin-bottom: 20px;
}

.hero-description {
  font-size: 18px;
  margin-bottom: 40px;
}

footer {
  background-color: #f8f8f8;
  padding: 10px 20px;
  border-top: 2px solid #f2f2f2;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-left p {
  margin: 0;
}

footer a {
  color: #333;
  text-decoration: none;
  margin-left: 10px;
}



</style>
