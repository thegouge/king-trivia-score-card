<template>
  <div id="board">
    <MetaNotes />
    <div id="toolbar">
      <button @click="this.addTeam">Add Team</button>
      <button @click="this.resetTheState">Reset</button>
      <button @click="this.exportFile">Download</button>
    </div>

    <table id="scores">
      <tr v-if="teamsArray.length > 0" id="top-bar">
        <th id="num-title">Team#</th>
        <th id="name-title">Team Name</th>

        <th v-if="this.mobile">Rounds</th>
        <th
          v-else
          class="round-num"
          v-for="(round, index) in this.rounds"
          :key="index"
        >
          Round {{ round.number }}
        </th>
        <th class="round-num" id="total-title">Total</th>
      </tr>
      <team
        v-for="(team, index) in this.teamsArray"
        :key="index"
        v-bind:index="index"
        :mobile="mobile"
      />
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import { Round, TeamType } from "../store/interfaces";
import MetaNotes from "./MetaNotes.vue";
import Team from "./Team.vue";

@Component({
  components: {
    MetaNotes,
    Team,
  },
})
export default class ScoreBoard extends Vue {
  // PROPS
  @Prop({ required: true })
  public rounds!: Round[];

  // DATA
  breakpoint = 775;
  mobile = window.innerWidth < this.breakpoint;

  // COMPUTED
  get teamsArray() {
    return this.$store.state.teams;
  }

  // METHODS
  checkForMobile() {
    this.mobile = window.innerWidth < this.breakpoint;
  }

  addTeam() {
    this.$store.commit("pushTeam", null);
  }

  exportFile() {
    let csv = this.convertToCSV();

    if (csv == null) return;

    const filename =
      this.$store.state.metaData.date + "-trivia-spreadsheet.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = "data:text/csv;charset=utf-8," + csv;
    }
    const data = encodeURI(csv);

    const link = document.createElement("a");
    link.setAttribute("href", data);
    link.setAttribute("download", filename);
    link.click();
  }

  convertToCSV() {
    const metaState = this.$store.state.metaData;
    const teams = this.$store.getters.rankedTeams;
    const metaCSV = `King Trivia Score Sheet!
Date:,Location:,ArrivalTime:,Show Start:,Show End:,Teams:,Players:,Empty Tables:,Question Rating:,Int. Notes:
${metaState.date},${metaState.location},${metaState.arrive},${metaState.start},${metaState.end},${teams.length},${metaState.players},${metaState.empty},${metaState.quizRating},${metaState.internal}\n`;

    let teamsCSV = `Team Number:,Name:,Round 1,Round 2,Round 3,Round 4,Round 5,Round 6,Round 7, Total\n`;
    teamsCSV += teams
      .map((team: TeamType) => {
        return `${team.teamNum},${team.teamName},${team.rounds[0].gained},${team.rounds[1].gained},${team.rounds[2].gained},${team.rounds[3].gained},${team.rounds[4].gained},${team.rounds[5].gained},${team.rounds[6].gained},${team.total}`;
      })
      .join("\n");

    return metaCSV + teamsCSV;
  }

  resetTheState() {
    this.$store.commit("resetAutoSave");
  }

  // LIFECYCLE
  created() {
    window.addEventListener("resize", this.checkForMobile);
  }
  destroyed() {
    window.removeEventListener("resize", this.checkForMobile);
  }
}
</script>

<style>
button {
  background: var(--king-trivia-red);
  color: white;
  margin: 5px;
  padding: 5px;
  font-weight: 700;
  border-color: black;
  cursor: pointer;
}

#scores {
  width: 100%;
  min-height: 100px;
}

td {
  text-align: center;
  border: 1px solid black;
  margin: 0;
  padding: 0;
}
</style>
