export const scoreBoard = Vue.component("score-board", {
  template: `
  <main id="scores">
    <button @click="addTeam">Add Team</button>
    <button @click="showStandings">Show Standings</button>

    <standings v-bind:teamRankings="teamArray" v-if="placings" @close-standings="closePlacings()"></standings>

    <table id="body">
      <tr id="top-bar">
        <th id="num-title">Team#</th>
        <th id="name-title">Team Name</th>

        <th class="round-num" v-for="round in rounds">{{ round }}</th>
        <th class="round-num" id="total-title">Total</th>
      </tr>
        <team v-for="(team, index) in teamArray" v-bind:key="index" ref="tems"></team>
    </table>
  </main>
  `,
  data() {
    return {
      placings: false,
      rounds: [
        "Round 1",
        "Round 2",
        "Round 3",
        "Round 4",
        "Round 5",
        "Round 6",
        "Round 7",
      ]
    }
  },
  props: {
    teamArray: {
      type: Array,
      required: true
    }
  },
  computed: {
    teams() {
      return this.$refs.tems;
    }
  },
  methods: {
    addTeam() {
      this.$emit("add-team");
    },
    showStandings() {
      this.$emit("update-rankings", this.teams);
      this.placings = true;
    },
    closePlacings() {
      this.placings = false;
    }
  }
});