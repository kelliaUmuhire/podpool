<template>
  <div class="mt-28 flex flex-col justify-center items-center text-white mb-10">
    <div class="font-bold text-xl">Log into your account.</div>
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
    <div class="mt-16">
      <div class="font-normal media-header text-sm ml-12">
        Or use social media
      </div>
      <div class="border rounded-xl media-social flex mt-6">
        <img
          src="../../assets/images/google2.svg"
          alt="google"
          class="w-10 h-10 py-3 px-3"
        />
        <div class="text-sm ml-5 py-2.5 pr-6 pl-2">Sign in with Google</div>
      </div>
      <div class="border rounded-xl media-social flex mt-6">
        <img
          src="../../assets/images/fb.svg"
          alt="facebook"
          class="w-10 h-10 py-3 px-3"
        />
        <div class="text-sm ml-5 py-2.5 pr-6 pl-2">Sign in with Facebook</div>
      </div>
    </div>
    <div class="font-normal text-sm mt-10">
      Don't have an account?
      <span class="register-btn"
        ><router-link to="/register">Register</router-link></span
      >
    </div>
  </div>
  <hr class="w-full mt-16" />
  <Footer />
</template>

<script>
import Footer from "../../components/Footer";
export default {
  components: { Footer },
  name: "Login",
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
.media-header {
  color: #5b7481;
}

.media-social {
  border-color: #1d3557;
}

.media-social img {
  border-right: 1px solid #1d3557;
}
.register-btn {
  color: #457b9d;
  text-decoration-line: underline;
}
</style>
