import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";

Vue.use(Vuex);

const fullDay = new Date();

export const store = new Vuex.Store({
  strict: true,
  state: {
    metaData: {
      date: `${fullDay.getFullYear()}-${("0" + (fullDay.getMonth() + 1)).slice(
        -2
      )}-${("0" + fullDay.getDate()).slice(-2)}`,
      location: "",
      arrive: "",
      start: "",
      end: "",
      teams: "",
      players: "",
      empty: "",
      quizRating: "",
      internal: ""
    },
    teams: [],
    timer: 0
  },
  getters: {
    rankedTeams(state) {
      return _.sortBy(state.teams, team => team.total).reverse();
    },
    numTeams(state) {
      return state.teams.length;
    }
  },
  mutations: {
    pushTeam(state) {
      state.teams.push({
        teamName: "",
        teamNum: "00000",
        rounds: [{
            number: 1,
            gained: 0
          },
          {
            number: 2,
            gained: 0
          },
          {
            number: 3,
            gained: 0
          },
          {
            number: 4,
            gained: 0
          },
          {
            number: 5,
            gained: 0
          },
          {
            number: 6,
            gained: 0
          },
          {
            number: 7,
            gained: 0
          }
        ],
        total: 0
      });
      this.commit("saveToLocal", "_autoSave");
    },
    updateName(state, payload) {
      state.teams[payload.index].teamName = payload.value;
      this.commit("saveToLocal", "_autoSave");
    },
    updateNum(state, payload) {
      state.teams[payload.index].teamNum = payload.value;
      this.commit("saveToLocal", "_autoSave");
    },
    updateRounds(state, payload) {
      state.teams[payload.index].rounds[payload.round - 1].gained =
        payload.score;

      Vue.set(
        state.teams[payload.index].rounds[payload.round - 1],
        "graded",
        true
      );
      const newTotal = state.teams[payload.index].rounds.reduce(
        (total, round) => {
          if (round.number === payload.round) {
            return total + payload.score;
          } else {
            return total + round.gained;
          }
        },
        0
      );
      state.teams[payload.index].total = newTotal;
      this.commit("saveToLocal", "_autoSave");
    },
    updateMeta(state, payload) {
      state.metaData[payload.noteToUpdate] = payload.value;
    },
    loadFromLocal(state, loadName) {
      let newState = JSON.parse(localStorage.getItem(loadName));
      if (newState) {
        store.replaceState(newState);
      }
    },
    saveToLocal(state, saveName) {
      localStorage.setItem(saveName, JSON.stringify(state));
    },
    resetAutoSave(state) {
      localStorage.removeItem("_autoSave");
      store.replaceState({
        metaData: {
          date: `${fullDay.getFullYear()}-${("0" + (fullDay.getMonth() + 1)).slice(
            -2
          )}-${("0" + fullDay.getDate()).slice(-2)}`,
          location: "",
          arrive: "",
          start: "",
          end: "",
          teams: "",
          players: "",
          empty: "",
          quizRating: "",
          internal: ""
        },
        teams: [],
        timer: 0
      });
    }
  }
});
