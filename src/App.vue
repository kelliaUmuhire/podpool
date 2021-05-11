<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <!-- <home /> -->
  <!-- <navbar /> -->
  <auth-navbar />
  <router-view />
</template>

<script>
import AuthNavbar from "./components/AuthNavbar.vue";
import Home from "./components/Home.vue";
import Navbar from "./components/Navbar.vue";
export default {
  components: { Home, Navbar, AuthNavbar },
};
</script>
<style>
.bg-color {
  background-color: "#00030C";
}
.bold {
  font-family: "Poppins", sans-serif;
}
</style>
