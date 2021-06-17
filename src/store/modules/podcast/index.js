import axios from "axios";

const state = {
  podcasts: [],
};

const mutations = {
  GET_PODCASTS(state, payload) {
    state.podcasts = payload;
  },
};

const actions = {
  getPodcasts({ commit }) {
    axios.get("http://localhost:3050/api/podcast").then((response) => {
      console.log(response.data);
      commit("GET_PODCASTS", response.data.podcasts);
    });
  },
};

const getters = {
  podcasts: (state) => state.podcasts,
  podcastById: (state) => (id) => {
    return state.podcasts.find((podcast) => podcast.id === id);
  },
};

const podcastModule = {
  state,
  mutations,
  actions,
  getters,
};

export default podcastModule;
