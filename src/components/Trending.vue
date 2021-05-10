<template>
  <div class="mt-20 ml-10 mb-5">
    <div class="font-semibold text-xl text-white">Trending</div>
    <div class="flex flex-row flex-wrap mt-5 relative">
      <div
        class="flex flex-row h-48  relative item border border-transparent rounded-2xl mr-7 mt-8"
      >
        <!-- <img
          src="https://source.unsplash.com/random"
          alt="random"
          class="item-img border border-transparent rounded-l-lg"
        /> -->

        <div class="item-bg item-img" @click="$router.push('/podcast/1')">
          <!-- <img
            src="https://source.unsplash.com/random"
            alt="random"
            class="item-img border border-transparent rounded-l-lg"
          /> -->
        </div>

        <div
          class="text-white font-normal h-full border border-transparent item-content rounded-r-lg w-3/5 p-5"
        >
          <div class="title mb-2">The lights on</div>
          <div class="content text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
            ligula sagittis nisl suscipit tincidunt
          </div>
          <div class="tags flex flex-row flex-wrap mt-2">
            <div class="border rounded-md text-xs py-0.5 px-1.5">sci-fi</div>
          </div>
          <div class="mt-2">
            <span class="font-semibold text-xs">Episodes: </span
            ><span class="font-normal text-xs">500</span>
          </div>
          <img
            src="../assets/images/rplay.svg"
            alt="play"
            class="absolute right-5 play h-8 w-9"
          />
        </div>
      </div>
      <!-- another -->

      <div
        class="flex flex-row h-48  relative item border border-transparent rounded-2xl mr-7 mt-8"
      >
        <div class="item-bg item-img"></div>
        <div
          class="text-white font-normal h-full border border-transparent item-content rounded-r-lg w-3/5 p-5"
        >
          <div class="title mb-2">The lights on</div>
          <div class="content text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
            ligula sagittis nisl suscipit tincidunt
          </div>
          <div class="tags flex flex-row flex-wrap mt-2">
            <div class="border rounded-md text-xs py-0.5 px-1.5">sci-fi</div>
          </div>
          <div class="mt-2">
            <span class="font-semibold text-xs">Episodes: </span
            ><span class="font-normal text-xs">500</span>
          </div>
          <img
            src="../assets/images/rplay.svg"
            alt="play"
            class="absolute right-5 play h-8 w-9"
          />
        </div>
      </div>
      <!-- end -->
      <!-- another -->
      <div
        class="flex flex-row h-48  relative item border border-transparent rounded-2xl mr-7 mt-8"
      >
        <div class="item-bg item-img"></div>
        <div
          class="text-white font-normal h-full border border-transparent item-content rounded-r-lg w-3/5 p-5"
        >
          <div class="title mb-2">The lights on</div>
          <div class="content text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
            ligula sagittis nisl suscipit tincidunt
          </div>
          <div class="tags flex flex-row flex-wrap mt-2">
            <div class="border rounded-md text-xs py-0.5 px-1.5">sci-fi</div>
          </div>
          <div class="mt-2">
            <span class="font-semibold text-xs">Episodes: </span
            ><span class="font-normal text-xs">500</span>
          </div>
          <img
            src="../assets/images/rplay.svg"
            alt="play"
            class="absolute right-5 play h-8 w-9"
          />
        </div>
      </div>
      <!-- end -->
      <!-- another -->
      <div
        class="flex flex-row h-48  relative item border border-transparent rounded-2xl mr-7 mt-8"
      >
        <div class="item-bg item-img"></div>
        <div
          class="text-white font-normal h-full border border-transparent item-content rounded-r-lg w-3/5 p-5"
        >
          <div class="title mb-2">The lights on</div>
          <div class="content text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
            ligula sagittis nisl suscipit tincidunt
          </div>
          <div class="flex flex-row flex-wrap mt-2">
            <div class="border rounded-md text-xs py-0.5 px-1.5 tag__div">
              sci-fi
            </div>
          </div>
          <div class="mt-2">
            <span class="font-semibold text-xs">Episodes: </span
            ><span class="font-normal text-xs">500</span>
          </div>
          <img
            src="../assets/images/rplay.svg"
            alt="play"
            class="absolute right-5 play h-8 w-9"
          />
        </div>
      </div>
      <!-- end -->
      <div class="absolute right-1/2 bottom-16">
        <img src="../assets/images/dots.svg" alt="dots" class="w-5 h-5 " />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trending",
};
</script>

<style>
.tag__div {
  background-color: #1d3557;
  border-color: #1d3557;
}

.item-bg {
  background-image: url("https://source.unsplash.com/random");
  background-size: cover;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
</style>
