<template>
  <div class="bg-color flex justify-between ml-10 mr-10 mt-5">
    <router-link to="/discover" class="disc text-sm">
      Discover
    </router-link>
    <router-link to="/"
      ><img src="../assets/images/PodPool.png" alt="logo" class="w-18 h-5"
    /></router-link>
    <div class="other flex space-x-4">
      <img src="../assets/images/search.png" alt="search" class="w-5 h-5" />
      <img src="../assets/images/user.png" alt="user" class="w-5 h-5" />
      <img src="../assets/images/web.png" alt="web" class="w-5 h-5" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.disc {
  color: #a8dadc;
}
.space {
  margin-right: 24rem;
  margin-left: 24rem;
}
</style>
