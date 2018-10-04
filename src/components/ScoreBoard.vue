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
        <team v-for="(team, index) in teamsArray" :key="index" v-bind:index="index" />
    </table>
    </div>
</template>

<script>
import MetaNotes from "./MetaNotes";
import Team from "./Team";

export default {
  name: "scoreBoard",
  components: {
    MetaNotes,
    Team
  },
  computed: {
    teamsArray() {
      return this.$store.state.teams;
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
      this.$store.commit('pushTeam');
    },
    exportFile() {
      let csv = this.convertToCSV();

      if(csv == null) return;

      const filename = this.$store.state.metaData.date + "-trivia-spreadsheet.csv";

      if(!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
      }
      const data = encodeURI(csv);

      const link = document.createElement('a');
      link.setAttribute('href', data);
      link.setAttribute('download', filename);
      link.click();
    },
    convertToCSV() {
      const metaState = this.$store.state.metaData;
      const teams = this.$store.getters.rankedTeams;
      const metaCSV = `King Trivia Score Sheet!
Date:,Location:,ArrivalTime:,Show Start:,Show End:,Teams:,Players:,Empty Tables:,Question Rating:,Int. Notes:
${metaState.date},${metaState.location},${metaState.arrive},${metaState.start},${metaState.end},${teams.length},${metaState.players},${metaState.empty},${metaState.quizRating},${metaState.internal}\n`;

      let teamsCSV = `Team Number:,Name:,Round 1,Round 2,Round 3,Round 4,Round 5,Round 6,Round 7, Total\n`;
      teamsCSV += teams.map((team) => {
        return `${team.teamNum},${team.teamName},${team.rounds[0].gained},${team.rounds[1].gained},${team.rounds[2].gained},${team.rounds[3].gained},${team.rounds[4].gained},${team.rounds[5].gained},${team.rounds[6].gained},${team.total}`;
      }).join('\n');

      return metaCSV + teamsCSV;
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
