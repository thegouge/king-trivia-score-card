<template>
  <div id="board">
    <MetaNotes />
      <div id="toolbar">
        <button @click="addTeam">Add Team</button>
        <button @click="exportFile">Export</button>
      </div>

    <table id= "scores">
      <tr id="top-bar">
        <th id="num-title">Team#</th>
        <th id="name-title">Team Name</th>

        <th class="round-num" v-for="(round, index) in rounds" :key="index">Round {{ round.number }}</th>
        <th class="round-num" id="total-title">Total</th>
      </tr>
        <team v-for="(team, index) in teamsArray" v-bind:key="index" v-bind:index="index" v-bind:teamData="teamsArray[index]" />
    </table>
    </div>
</template>

<script>
import MetaNotes from "./MetaNotes";
import Team from "./Team";
import store from "../assets/store";

export default {
  name: "scoreBoard",
  components: {
    MetaNotes,
    Team
  },
  data() {
    return {
      placings: false,
      shared: store
    }
  },
  computed: {
    teamsArray() {
      return this.shared.state.teams;
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
  }
}
</script>

<style>
#scores {
  width: 100%;
}

td {
  text-align: center;
  border: 1px solid black;
  margin: 0;
  padding: 5px;
}

.team-box {
  width: 150px;
  padding: 0;
}
</style>
