<template>
  <div class="bg-color flex justify-between ml-10 mr-10 mt-5">
    <router-link to="/discover" class="disc text-sm">
      Discover
    </router-link>
    <router-link to="/"
      ><img src="../assets/images/PodPool.png" alt="logo" class="w-18 h-5"
    /></router-link>
    <div class="other flex space-x-4">
      <img src="../assets/images/bell.svg" alt="search" class="w-5 h-5" />
      <router-link to="/search"
        ><img src="../assets/images/search.png" alt="search" class="w-5 h-5"
      /></router-link>
      <router-link to="/login"
        ><img
          src="https://wallpaperaccess.com/full/2213424.jpg"
          alt="user"
          class="w-9 h-10 profile -mt-2"
      /></router-link>
      <img src="../assets/images/web.png" alt="web" class="w-5 h-5" />
      <div class="absolute dropdown text-white text-sm py-3 top-16 hidden">
        <div class="py-2 px-5 border-b">My podcasts</div>
        <div class="py-2 px-5 border-b">Profile</div>
        <div class="py-2 px-5">Log out</div>
      </div>
      <div
        class="absolute dropdown text-white text-sm pt-3 pb-10 top-14 right-32 hidden"
      >
        <div class="py-2 px-5 border-b">pizza #23 out</div>
        <div class="py-2 px-5 border-b">pizza #23 out</div>
        <!-- <div class="py-2 px-5">Log out</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthNavbar",
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

.dropdown {
  background-color: #1d3557af;
  border-radius: 5px;
}

.dropdown .border-b {
  border-bottom: 1px solid #1d3557d5;
}

.profile {
  border-radius: 50%;
}
</style>
