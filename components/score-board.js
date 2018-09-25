export const scoreBoard = Vue.component("score-board", {
  template: `
    <div>
      <meta-notes ref="metaNotes" />

        <div id="toolbar">
          <button @click="addTeam">Add Team</button>
          <button @click="exportFile">Export</button>
        </div>

      <table id= "scores">
  
        <tr id="top-bar">
          <th id="num-title">Team#</th>
          <th id="name-title">Team Name</th>
  
          <th class="round-num" v-for="round in rounds">Round {{ round.number }}</th>
          <th class="round-num" id="total-title">Total</th>
        </tr>
          <team v-for="(team, index) in this.shared.state.teams" v-bind:key="index" ref="tems" v-bind:index="index" v-bind:teamData="shared.state.teams[index]" />
      </table>
    </div>
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
      console.log
      this.shared.addTeam();
    },
    exportFile() {
      alert("Not functional yet!");
    }
  },
  computed: {
    teams() {
      console.log(this.shared.state.teams);
      return this.shared.state.teams;
    }
  }
});