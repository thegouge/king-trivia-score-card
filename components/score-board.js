export const scoreBoard = Vue.component("score-board", {
  template: `
    <table id= "scores">
      <tr id="top-bar">
        <th id="num-title">Team#</th>
        <th id="name-title">Team Name</th>

        <th class="round-num" v-for="round in rounds">{{ round }}</th>
        <th class="round-num" id="total-title">Total</th>
      </tr>
        <team v-for="(team, index) in teamArray" v-bind:key="index" @total-change="passAlong" ref="tems" v-bind:index="index"></team>
    </table>
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
  methods: {
    passAlong(team) {
      let teamIndex = this.teams.indexOf(team);
      this.$emit("passed", team, teamIndex);
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
  }
});