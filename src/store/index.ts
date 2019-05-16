import Vue from "vue";
import Vuex from "vuex";
import {sortBy} from "lodash";

import {State} from "./interfaces";

Vue.use(Vuex);

const fullDay = new Date();

const baseState: State = {
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
    internal: "",
  },
  teams: [],
};

const store = new Vuex.Store({
  strict: true,
  state: baseState,
  getters: {
    rankedTeams(state) {
      return sortBy(state.teams, (team) => team.total).reverse();
    },
    numTeams(state) {
      return state.teams.length;
    },
  },
  mutations: {
    pushTeam(state, payload) {
      payload
        ? state.teams.push(payload)
        : state.teams.push({
            teamName: "",
            teamNum: "00000",
            rounds: [
              {
                number: 1,
                gained: 0,
              },
              {
                number: 2,
                gained: 0,
              },
              {
                number: 3,
                gained: 0,
              },
              {
                number: 4,
                gained: 0,
              },
              {
                number: 5,
                gained: 0,
              },
              {
                number: 6,
                gained: 0,
              },
              {
                number: 7,
                gained: 0,
              },
            ],
            total: 0,
          });
      store.commit("saveToLocal", "_autoSave");
    },
    updateName(state, payload) {
      state.teams[payload.index].teamName = payload.value;
      store.commit("saveToLocal", "_autoSave");
    },
    updateNum(state, payload) {
      state.teams[payload.index].teamNum = payload.value;
      store.commit("saveToLocal", "_autoSave");
    },
    updateRounds(state, payload) {
      const currentTeamRound =
        state.teams[payload.index].rounds[payload.round - 1];
      currentTeamRound.gained = payload.score;

      currentTeamRound.breakdown = payload.breakdown;

      Vue.set(currentTeamRound, "graded", true);
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
      store.commit("saveToLocal", "_autoSave");
    },
    updateMeta(state, payload) {
      state.metaData[payload.noteToUpdate] = payload.value;
    },
    loadFromLocal(state, loadName) {
      let newState = JSON.parse(<string>localStorage.getItem(loadName));
      if (newState) {
        this.replaceState(newState, null);
      }
    },
    saveToLocal(state, saveName) {
      localStorage.setItem(saveName, JSON.stringify(state));
    },
    resetAutoSave() {
      localStorage.removeItem("_autoSave");
      this.replaceState(
        {
          metaData: {
            date: `${fullDay.getFullYear()}-${(
              "0" +
              (fullDay.getMonth() + 1)
            ).slice(-2)}-${("0" + fullDay.getDate()).slice(-2)}`,
            location: "",
            arrive: "",
            start: "",
            end: "",
            teams: "",
            players: "",
            empty: "",
            quizRating: "",
            internal: "",
          },
          teams: [],
        },
        null
      );
    },
  },
});

export default store;
