<template>
  <div
    class="mt-5 footer flex flex-row text-gray-500 text-sm px-24 py-10 relative space-x-20"
  >
    <div class="mb-5">
      <div class="font-semibold">Legal</div>
      <div class="mt-4">Terms and conditions</div>
      <div class="mt-2">Privacy policy</div>
      <div class="mt-2">Cookies</div>
    </div>
    <div>
      <div class="font-semibold">Get in touch</div>
      <div class="mt-4">info@podpool.com</div>
      <div class="mt-2">+2507823351</div>
    </div>
    <div>
      <div class="font-semibold">Follow us</div>
      <div class="mt-4">Twitter</div>
      <div class="mt-2">Facebook</div>
      <div class="mt-2">Instagram</div>
    </div>
    <div>
      <div class="font-semibold">Help</div>
      <div class="mt-4">Help center</div>
      <div class="mt-2">Sign up</div>
    </div>
    <div>
      <div class="font-semibold ml-24">Get the app</div>
      <div class="flex flex-row">
        <div
          class="flex flex-row store border border-transparent rounded-md py-2 pl-2 pr-3  mt-5"
        >
          <img
            src="../assets/images/google.png"
            alt="google"
            class="w-4 h-4 mt-0.5"
          />
          <div class="text-xs ml-2 mt-0.5">Google play</div>
        </div>
        <div
          class="flex flex-row store border border-transparent rounded-md py-2 pr-4 mt-5 ml-10"
        >
          <img
            src="../assets/images/apple.png"
            alt="google"
            class="w-5 h-5 mt-0.5"
          />
          <div class="text-xs ml-2 mt-0.5">Apple store</div>
        </div>
      </div>
    </div>
    <div class="absolute left-n bottom-5">@2021 podpool devs</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  margin-top: auto;
}
.store {
  background-color: #0b0b0b;
}

.store div {
  color: #e3e3e3;
}
.left-n {
  left: 30rem;
}
</style>
