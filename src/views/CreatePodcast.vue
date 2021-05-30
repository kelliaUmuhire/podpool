<template>
  <div
    class="mt-28 flex flex-col justify-center items-center text-white mb-10"
    :class="modal ? 'filter blur-sm' : ''"
  >
    <div class="font-bold text-xl">Create podcast.</div>
    <div
      class="input-container border rounded-xl relative text-sm font-light px-4 py-3 mt-16"
    >
      <input
        type="text"
        placeholder="Enter podcast name"
        class="flex-1 bg-transparent w-4/5"
      />
    </div>
    <div
      class="input-container border rounded-xl relative text-sm font-light px-4 py-3 mt-10"
      v-on:@blur="console.log('ssss')"
      tabindex="0"
    >
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="flex-1 bg-transparent w-full"
        placeholder="Enter podcast info"
      ></textarea>
    </div>
    <div class="font-bold text-lg relative text-left episode__h mt-10">
      Episodes
    </div>
    <div
      class="input-container episode__new border rounded-lg relative text-sm font-light py-3 mt-4"
    >
      <img
        src="../assets/images/plus.svg"
        alt="password"
        class="w-4 h-4 absolute left-5 top-3.5"
      />
      <div class="pl-12 cursor-pointer" @click="modal = !modal">
        New episode
      </div>
    </div>
    <div class="font-bold text-lg relative text-left tag__h mt-10">
      Tags
    </div>
    <div class="tags flex flex-row flex-wrap mt-5 tag__t">
      <div
        class="g-tag border rounded-md text-xs py-1 px-3 bg-white font-semibold ml-2"
      >
        <img
          src="../assets/images/plus.svg"
          alt="password"
          class="w-3 h-3 mt-0.5"
        />
      </div>
      <div
        class="g-tag border rounded-md text-xs py-1 px-1.5 bg-white font-semibold ml-2"
      >
        Biography
      </div>
    </div>
    <div class="reco">
      <button
        class="text-white focuse:outline-none text-xs py-3 px-7 border border-transparent rounded-xl mt-20 font-bold"
      >
        Create
      </button>
    </div>
  </div>
  <div
    class="absolute popup top-24 flex flex-col text-white w-4/12 left-96 rounded pl-10 pb-14"
    :class="modal ? 'block' : 'hidden'"
  >
    <div
      class="input-container input_epi border rounded-lg relative text-sm font-light px-4 py-2 mt-16"
    >
      <input
        type="text"
        placeholder="Enter episode name"
        class="flex-1 bg-transparent w-4/5"
      />
    </div>
    <div
      class="input-container input_epi border rounded-xl relative text-sm font-light px-4 py-2 mt-8"
    >
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="flex-1 bg-transparent w-full"
        placeholder="Enter episode info"
      ></textarea>
    </div>
    <div
      class="input-container input_epi_ border rounded-lg relative text-sm font-light py-2 mt-4"
    >
      <img
        src="../assets/images/upload.svg"
        alt="Upload"
        class="w-4 h-4 absolute left-3.5 top-2.5"
      />
      <div class="pl-10">Upload</div>
    </div>
    <button
      class="text-white focuse:outline-none text-xs py-3 px-2 w-24 create__epi border border-transparent rounded-xl mt-20 font-bold"
    >
      Create
    </button>
  </div>
  <hr class="w-full mt-16" />
  <Footer />
</template>

<script>
import Footer from "../components/Footer";
export default {
  components: { Footer },
  name: "Create",
  data() {
    return {
      modal: false,
    };
  },
};
</script>

<style>
.input-container {
  border-color: #1d3557;
  width: 45%;
}

.input_epi {
  width: 90% !important;
}

.s-button {
  background-color: #1d3557;
  width: 45%;
}

.input-container input::placeholder,
.input-container textarea::placeholder {
  color: #37474f;
  font-weight: 100;
}
.episode__h {
  margin-right: 30rem;
}
.episode__new {
  width: 10rem !important;
  margin-right: 25rem;
}
.tag__h {
  margin-right: 32rem;
}
.tag__t {
  margin-right: 27.5rem;
}

.popup {
  background-color: #0a101a;
}
.input_epi_ {
  width: 30% !important;
}
.create__epi {
  background-color: #1d3557;
}
</style>
