<template>
  <div class="mt-20 ml-10 mb-5 text-white">
    <div class="font-semibold text-xl text-white">My podcasts</div>
    <div class="flex flex-col space-y-10">
      <div class="flex flex-row w-11/12 ml-2 mt-10">
        <div class="item__bg item__img"></div>
        <div class="ml-5 w-3/5">
          <div class="text-sm">How it is done</div>
          <div class="text-xs text-gray-500">May 10,2020</div>
          <div class="text-xs mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque in metus vitae dui placerat bibendum et vel odio. Donec
            in pretium Sed egestas consectetur lorem, ut aliquet enim facilisis
            vel. Maecenas sit amet facilisis justo. Sed hendrerit nunc purus, et
            luctus orci fermentum vel. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra per inceptos himenaeos<span
              class="text-gray-600"
              >...More</span
            >
          </div>
          <div class="tags flex flex-row flex-wrap mt-4 relative">
            <div class="border rounded-md text-xs py-0.5 px-1.5">sci-fi</div>
            <img
              src="../assets/images/rplay.svg"
              alt="play"
              class="absolute w-6 h-6 top-0 left-20"
            />
          </div>
        </div>
      </div>
      <!-- another -->
      <div class="flex flex-row w-11/12 ml-2 mt-10">
        <div class="item__bg item__img"></div>
        <div class="ml-5 w-3/5">
          <div class="text-sm">How it is done</div>
          <div class="text-xs text-gray-500">May 10,2020</div>
          <div class="text-xs mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque in metus vitae dui placerat bibendum et vel odio. Donec
            in pretium Sed egestas consectetur lorem, ut aliquet enim facilisis
            vel. Maecenas sit amet facilisis justo. Sed hendrerit nunc purus, et
            luctus orci fermentum vel. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra per inceptos himenaeos<span
              class="text-gray-600"
              >...More</span
            >
          </div>
          <div class="tags flex flex-row flex-wrap mt-4 relative">
            <div class="border rounded-md text-xs py-0.5 px-1.5">sci-fi</div>
            <img
              src="../assets/images/rplay.svg"
              alt="play"
              class="absolute w-6 h-6 top-0 left-20"
            />
          </div>
        </div>
      </div>
      <!-- end -->
    </div>
    <div class="font-semibold text-xl text-white mt-20">
      Podcasts you follow
    </div>
    <div class="flex flex-col space-y-10">
      <div class="flex flex-row w-11/12 ml-2 mt-10">
        <div class="item__bg item__img"></div>
        <div class="ml-5 w-3/5">
          <div class="text-sm">How it is done</div>
          <div class="text-xs text-gray-500">May 10,2020</div>
          <div class="text-xs mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque in metus vitae dui placerat bibendum et vel odio. Donec
            in pretium Sed egestas consectetur lorem, ut aliquet enim facilisis
            vel. Maecenas sit amet facilisis justo. Sed hendrerit nunc purus, et
            luctus orci fermentum vel. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra per inceptos himenaeos<span
              class="text-gray-600"
              >...More</span
            >
          </div>
          <div class="tags flex flex-row flex-wrap mt-4 relative">
            <div class="border rounded-md text-xs py-0.5 px-1.5">sci-fi</div>
            <img
              src="../assets/images/rplay.svg"
              alt="play"
              class="absolute w-6 h-6 top-0 left-20"
            />
          </div>
        </div>
      </div>
      <!-- another -->
      <div class="flex flex-row w-11/12 ml-2 mt-10">
        <div class="item__bg item__img"></div>
        <div class="ml-5 w-3/5">
          <div class="text-sm">How it is done</div>
          <div class="text-xs text-gray-500">May 10,2020</div>
          <div class="text-xs mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque in metus vitae dui placerat bibendum et vel odio. Donec
            in pretium Sed egestas consectetur lorem, ut aliquet enim facilisis
            vel. Maecenas sit amet facilisis justo. Sed hendrerit nunc purus, et
            luctus orci fermentum vel. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra per inceptos himenaeos<span
              class="text-gray-600"
              >...More</span
            >
          </div>
          <div class="tags flex flex-row flex-wrap mt-4 relative">
            <div class="border rounded-md text-xs py-0.5 px-1.5">sci-fi</div>
            <img
              src="../assets/images/rplay.svg"
              alt="play"
              class="absolute w-6 h-6 top-0 left-20"
            />
          </div>
        </div>
      </div>
      <!-- end -->
    </div>
  </div>
</template>

<script>
export default {};
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
  height: 9rem;
  width: 10rem;
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
