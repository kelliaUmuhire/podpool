<template>
  <trending />

  <!-- <Footer /> -->
  <div class="mt-14 ml-10 ">
    <div class="font-semibold text-xl text-white">Hot genres</div>
  </div>
  <div class="mt-14 ml-10">
    <div class="font-semibold text-xl text-white">Most played</div>
  </div>
  <div class="mt-14 ml-10">
    <div class="font-semibold text-xl text-white">Want a recommendation?</div>
    <div class="text-white text-sm mt-2">Sign up for the recommendation!</div>
    <div class="border rounded-xl reco h-12 w-3/6 mt-8 relative">
      <input
        type="text"
        class="bg-transparent h-8 p-4 w-4/5 text-sm mt-1.5 ml-2 focus:outline-none text-white"
        placeholder="Enter your email "
      />
      <button
        class="text-white absolute focuse:outline-none text-xs py-3 px-7 border border-transparent rounded-xl top-0.5 right-0.5"
      >
        Sign Up
      </button>
    </div>
  </div>
  <hr class="w-full mt-16" />
</template>

<script>
import Footer from "../components/Footer.vue";
import Trending from "../components/Trending.vue";
export default {
  name: "Discover",
  components: { Footer, Trending },
};
</script>

<style>
.item {
  background-color: #1d355780;
  width: 30%;
}
.item .item-img {
  height: 12.12rem;
  margin-top: -2px;
  margin-left: -2px;
  width: 42%;
}
/* .item .item-content {
  border-color: #1d35579f;
} */
.tags div {
  background-color: #1d3557;
  border-color: #1d3557;
}
.play {
  top: 9.4rem;
}

.reco {
  border-color: #37474f9c;
}

.reco button {
  background-color: #9fe1e3;
}

.reco input::placeholder {
  color: #6f6f6f;
}
</style>
