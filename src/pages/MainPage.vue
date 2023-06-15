<template>
  <div class="container">
    <RecipePreviewList title="Try These Recipes" class="RandomRecipes center" reqSource="/recipes/random" />
    <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to view this</router-link>
    {{ !$root.store.username }}
    <!-- <RecipePreviewList
      title="Your Last Viewed Recipes"
      :class="{
        RandomRecipes: true,
        blur: !$root.store.username,
        center: true
      }"
      disabled
      reqSource="/users/lastWatched"
    ></RecipePreviewList> -->
    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList
  }
};
</script>

<style lang="scss" scoped>
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
