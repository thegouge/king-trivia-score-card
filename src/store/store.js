import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    metaData: {
      date: "",
      location: "",
      arrive: "",
      start: "",
      teamNum: "",
      players: "",
      empty: "",
      internal: ""
    },
    teams: []
  },
  getters: {
    rankedTeams(state) {
      return _.sortBy(state.teams, team => team.total).reverse();
    }
  },
  mutations: {
    pushTeam(state) {
      state.teams.push({
        teamName: "",
        teamNum: "",
        rounds: [
          {
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
    },
    updateName(state, payload) {
      state.teams[payload.index].teamName = payload.value;
    },
    updateNum(state, payload) {
      state.teams[payload.index].teamNum = payload.value;
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
    }
  },
  actions: {}
});

// updateMeta(note, value) {
//   if (this.debug) console.log(`Updating '${note}' in the store!`);

//   this.state[note] = value;
// },
// updateTeam(team, i) {
//   if (this.debug) console.log(`updating ${team.name} in the store!`);

// gradeRound(round, teamIndex, score) {
//   this.state.teams[teamIndex].rounds[round - 1].gained = score;
//   this.state.teams[teamIndex].rounds[round - 1].graded = true;
//   this.$emit("test");
// }
