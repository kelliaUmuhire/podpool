<template>
  <div class="text-white mt-24 px-20">
    <div class="flex flex-row pl-16 mt-10">
      <img
        src="https://wallpaperaccess.com/full/2213424.jpg"
        alt="profile"
        class="border border-transparent rounded-full w-40 h-40"
      />
      <div class="text-white mt-16 ml-5">
        <div class="name font-semibold">Anderson Ways</div>
        <div class="username text-sm">@ways</div>
      </div>
    </div>
    <div class="flex flex-row flex-wrap w-full pl-16 mt-14">
      <div class="w-2/6">
        <div class="font-semibold">About</div>
        <div class="mt-5 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          in metus vitae dui placerat bibendum et vel odio. Donec in pretium Sed
          egestas consectetur lorem, ut aliquet enim facilisis vel. Maecenas sit
          amet facilisis justo
        </div>
        <div class="mt-5 text-sm">
          <span class="font-semibold">Email:</span> anderson@ways.com
        </div>
      </div>
      <div class="w-4/6 ">
        <div class="font-semibold ml-44">Podcasts</div>
        <!-- another -->
        <div
          class="flex flex-row h-48  relative item border border-transparent rounded-2xl mr-7 mt-6 w-3/5 ml-44"
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
          class="flex flex-row h-48  relative item border border-transparent rounded-2xl mr-7 mt-6 w-3/5 ml-44"
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
      </div>
    </div>
  </div>
  <hr class="w-full mt-24" />
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: { Footer },
  name: "Profile",
};
</script>

<style></style>
