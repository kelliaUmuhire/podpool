import { createStore } from "vuex";
import podcastModule from "./modules/podcast";

export default createStore({
  // state: () => ({
  //   podcasts: null,
  // }),
  // mutations: {
  //   setPodcasts(state, data) {
  //     state = { ...state, podcasts: data };
  //   },
  // },
  // actions: {
  //   fetchPodcasts({ commit }) {
  //     return axios.get("http://localhost:3050/api/podcast").then((res) => {
  //       commit("setPodcasts", res.data.podcasts);
  //     });
  //   },
  // },
  modules: {
    podcastModule,
  },
});
