<template>
  <div class="mt-28 flex flex-col justify-center items-center text-white mb-10">
    <div class="font-bold text-xl">Create podcast.</div>
    <div
      class="input-container border rounded-xl relative text-sm font-light px-4 py-3 mt-20"
    >
      <input
        type="text"
        placeholder="Enter your email"
        class="flex-1 bg-transparent w-4/5"
      />
      <img
        src="../../assets/images/email.svg"
        alt="email"
        class="w-5 h-5 absolute right-5 top-3"
      />
    </div>
    <div
      class="input-container border rounded-xl relative text-sm font-light px-4 py-3 mt-10"
    >
      <input
        type="text"
        placeholder="Enter password"
        class="flex-1 bg-transparent w-4/5"
      />
      <img
        src="../../assets/images/lock.svg"
        alt="password"
        class="w-4 h-4 absolute right-5 top-3"
      />
    </div>
    <div
      class="s-button border border-transparent rounded-xl relative text-base font-bold py-2 text-center mt-14"
    >
      Sign In
    </div>
  </div>
  <hr class="w-full mt-16" />
  <Footer />
</template>

<script>
import Footer from "../../components/Footer";
export default {
  components: { Footer },
  name: "Create",
};
</script>

<style>
.input-container {
  border-color: #1d3557;
  width: 45%;
}

.s-button {
  background-color: #1d3557;
  width: 45%;
}

.input-container input::placeholder {
  color: #37474f;
  font-weight: 100;
}
</style>
