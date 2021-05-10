<template>
  <trending />

  <!-- <Footer /> -->
  <div class="mt-14 ml-10 text-white">
    <div class="font-semibold text-xl text-white">Hot genres</div>
  </div>
  <div class="mt-14 ml-10">
    <div class="font-semibold text-xl text-white">Most played</div>
    <div class="flex flex-row flex-wrap">
      <!-- start -->
      <div class="flex flex-row item-1 ml-2 mt-10">
        <div class="relative cont h-44">
          <!-- <div class="w-48 h-48">
            <img
              src="https://source.unsplash.com/random"
              alt="imagee"
              class=" mt-1 imagee w-full h-full"
            />
          </div> -->
          <img
            src="../assets/images/waves.svg"
            alt="waves"
            class=" relative top-18 left-0 waves opacity-60"
          />
          <img
            src="../assets/images/rplay.svg"
            alt="play"
            class="relative top-6 left-16"
          />
        </div>
        <div class="ml-5 w-4/5">
          <div class="text-base text-white">How it is done</div>
          <div class="text-xs text-gray-500">By Trevor noah</div>
          <div class="text-xs mt-2 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque in metus vitae dui placerat bibendum et vel odio. Donec
            in pretium Sed egestas consectetur lorem, ut aliquet enim facilisis
            vel. Maecenas sit amet facilisis justo.<span class="text-gray-600"
              >...More</span
            >
          </div>
          <div class="tags flex flex-row flex-wrap mt-5">
            <div
              class="border rounded-md text-xs py-1 px-1.5 text-white ep-tag"
            >
              500 episodes
            </div>
            <div
              class="g-tag border rounded-md text-xs py-1 px-1.5 bg-white font-semibold ml-2"
            >
              Book
            </div>
            <div
              class="g-tag border rounded-md text-xs py-1 px-1.5 bg-white font-semibold ml-2"
            >
              Biography
            </div>
          </div>
        </div>
      </div>
      <!-- end -->
    </div>
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
  <Footer />
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
  height: 12rem;
  margin-top: -1px;
  margin-left: -2px;
  width: 42%;
}
/* .item .item-content {
  border-color: #1d35579f;
} */

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

.tags .ep-tag {
  background-color: #ff112556;
  border-color: #ff112500;
}

.tags .g-tag {
  color: #1d3557;
  border-color: rgba(255, 255, 255, 0);
}

.waves {
  width: 98%;
}

.top-18 {
  top: 4.5rem;
}

.item-1 {
  width: 45%;
}

.cont {
  background-image: url("https://source.unsplash.com/random");
  background-size: cover;
  border-radius: 5px;
}

/* .imagee {
  width: 40%;
  height: 40%;
} */
</style>
