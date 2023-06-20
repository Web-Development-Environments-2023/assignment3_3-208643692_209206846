<template>
  <div class="about-page">
    <h1>About Us</h1>
    <p>
      Welcome to our recipe website! We are a team of passionate food enthusiasts who love to explore new flavors and share delicious recipes with the world.
    </p>
    <p>
      Our mission is to inspire and empower people to cook homemade meals by providing a wide range of easy-to-follow recipes for every occasion.
    </p>
    <p>
      We urge you to see our other projects:<br>
      <a class="click" @click='redirectTo("https://web-development-environments-2023.github.io/208643692/")'>Gad's website for his grandfather</a><br>
      <a class="click" @click='redirectTo("https://web-development-environments-2023.github.io/209206846/")'>Ofek's website for a retired teacher</a><br>
      <a class="click" @click='redirectTo("https://web-development-environments-2023.github.io/assignment2-209206846_208643692/")'>Ofek and Gad's Spaceship game</a><br>
    </p>
    <h2>Meet Our Team</h2>
    <div class="team-members">
      <div v-for="member in team" :key="member.name" class="team-member">
        <img :src="member.avatar" :alt="member.name" class="avatar" />
        <h3>{{ member.name }}</h3>
        <p>{{ member.role }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import max1 from "../assets/max1.jpeg"
import max2 from "../assets/max2.jpeg"
import max3 from "../assets/max3.jpeg"


export default {
  methods:{ 
      redirectTo(url){
        window.location.href=url;      
       } 
  },
  data() {
    return {
      team: [
        {
          name: "Gad & Ofek",
          role: "Founder",
          avatar: max1
        },
        {
          name: "Gad",
          role: "Chef",
          avatar: max2
        },
        {
          name: "Ofek",
          role: "Food Blogger",
          avatar: max3
        }
      ]
    };
  },
};
</script>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.about-page h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

.about-page h2 {
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 20px;
}

.about-page p {
  font-size: 16px;
  line-height: 1.5;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.team-member {
  text-align: center;
  margin: 20px;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.team-member h3 {
  font-size: 20px;
  margin-bottom: 5px;
}

.team-member p {
  font-size: 16px;
}

.click{
  color: blue;
  text-decoration: underline;
  
}

.click:hover {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
</style>
