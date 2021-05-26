<template>
  <div class="body mt-16 flex">
    <img
      src="../assets/images/headphone.svg"
      alt="bgimage"
      class="w-3/5 h-3/5"
    />
    <div class="text-white text-2xl font-bold leading-relaxed mt-32">
      <div>Listen to your favourite podcast, share, stream and download.</div>
      <div class="mt-20">
        <div class="text-xl font-semibold">Search now.</div>
        <div
          class="border border-transparent rounded-full search h-12 w-4/5 flex mt-3"
        >
          <img
            src="../assets/images/search.png"
            alt="search"
            class="w-5 h-5 mt-3 ml-5"
          />
          <input
            type="text"
            class="search h-8 p-4 w-4/5 text-sm mt-1 ml-2 focus:outline-none"
            placeholder="Search podcasts "
          />
        </div>
      </div>
    </div>
  </div>
  <hr class="w-full mt-16" />
  <!-- <div class="text-white">footer</div> -->
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
// import Navbar from "./Navbar.vue";
export default {
  name: "Home",
  components: { Footer },
};
</script>

<style>
.search {
  background-color: #1a2328b6;
}
hr {
  border-top: 0.2px solid #a8dadc34;
}
</style>
