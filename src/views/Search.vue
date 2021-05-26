<template>
  <div class="mt-24">
    <div class="search-box flex flex-row justify-center items-center relative">
      <div
        class="border border-transparent rounded-xl search h-12 w-4/6 flex mt-3"
      >
        <img
          src="../assets/images/search.png"
          alt="search"
          class="w-5 h-5 mt-3 ml-5"
        />
        <input
          type="text"
          class="bg-transparent h-8 p-4 w-4/5 text-sm mt-1.5 ml-2 focus:outline-none"
          placeholder="Search podcasts "
        />
      </div>
      <div class="category flex flex-row absolute">
        <div class="text-white text-xs mt-2.5">Select category</div>
        <img
          src="../assets/images/down.svg"
          alt="arrow-down"
          class="w-3 h-3 mt-3 ml-2"
        />
        <div class="select">
          <!-- <select
            name="genres"
            class="outline:none text-xs w-32 bg-transparent mt-2.5 text-white"
          >
            <option value="---" class="text-white">Select category</option>
            <option value="Biography">Biography</option>
            <option value="Comedy">Comedy</option>
            <option value="Coding">Coding</option>
            <option value="Food">Food</option>
          </select> -->
          <!-- <v-select :options="['Canada', 'United States']"></v-select> -->
        </div>
      </div>
      <button
        class="text-white absolute focuse:outline-none text-xs py-3 px-7 border border-transparent rounded-xl"
      >
        Search
      </button>
    </div>
    <div class="mt-28 text-white ml-10">
      <div class="text-lg">Popular searches</div>
      <!-- <v-select
        :options="options"
        label="country"
        :reduce="(country) => country.code"
      /> -->
      <div class="flex flex-col space-y-10">
        <div class="flex flex-row w-11/12 ml-2 mt-10">
          <!-- <img
            src="https://source.unsplash.com/random"
            alt="imagee"
            class="w-32 h-32 mt-1 bg-cover"
          /> -->
          <div class="item__bg item__img"></div>
          <div class="ml-5 w-4/5">
            <div class="text-sm">How it is done</div>
            <div class="text-xs text-gray-500">By Trevor noah</div>
            <div class="text-xs mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque in metus vitae dui placerat bibendum et vel odio.
              Donec in pretium Sed egestas consectetur lorem, ut aliquet enim
              facilisis vel. Maecenas sit amet facilisis justo. Sed hendrerit
              nunc purus, et luctus orci fermentum vel. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra per inceptos
              himenaeos<span class="text-gray-600">...More</span>
            </div>
            <div class="tags flex flex-row flex-wrap mt-4">
              <div class="border rounded-md text-xs py-0.5 px-1.5">sci-fi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="w-full mt-24" />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  name: "Search",
  components: { Footer },
  data() {
    return {
      options: [{ country: "Canada", code: "CA" }],
    };
  },
};
</script>

<style scoped>
.search {
  background-color: #1a232888;
}

.search input::placeholder {
  color: #455a64b6;
}

.search-box button {
  background-color: #457b9d;
  top: 0.9rem;
  right: 13.5rem;
}

.search-box .category {
  left: 56%;
}

.item__img {
  height: 8rem;
  width: 8rem;
}

.item__bg {
  background-image: url("https://source.unsplash.com/random");
  background-size: cover;
  border-radius: 5px;
}

.tags div {
  background-color: #1d3557;
  border-color: #1d3557;
}
</style>
