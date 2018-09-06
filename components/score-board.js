export const scoreBoard = Vue.component("score-board", {
  template: `
    <table id= "scores">
      <meta-notes ref="metaNotes"></meta-notes>
      <div id="toolbar">
        <button @click="addTeam">Add Team</button>
        <button @click="exportFile">Export</button>
      </div>

      <tr id="top-bar">
        <th id="num-title">Team#</th>
        <th id="name-title">Team Name</th>

        <th class="round-num" v-for="round in rounds">Round {{ round.number }}</th>
        <th class="round-num" id="total-title">Total</th>
      </tr>
        <team v-for="(team, index) in this.shared.state.teams" v-bind:key="index" ref="tems" v-bind:index="index"></team>
    </table>
  `,
  data() {
    return {
      placings: false,
      shared: store
    }
  },
  props: {
    rounds: {
      type: Array,
      required: true
    }
  },
  methods: {
    addTeam() {
      this.shared.addTeam();
    },
    exportFile() {
      alert("Not functional yet!");
    }
  },
  computed: {
    teams() {
      return this.$refs.tems;
    }
  }
});