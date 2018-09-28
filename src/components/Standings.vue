<template>
  <div id="rank-box">
      <h2 id="ranking-title">Team Rankings</h2>
      <ul>
        <li v-for="(team, index) in rankedTeams" v-bind:key="index">in {{ rankTeam(team) }} place: "{{ team.teamName }}" with {{ team.total }} points!</li>
      </ul>
    </div>
</template>

<script>
import _ from "lodash";

export default {
  computed: {
    teams() {
      return this.$store.state.teams.map(team => { return {teamName: team.teamName, total: team.total} });
    },
    rankedTeams() {
      return _.sortBy(this.$store.state.teams, team => team.total).reverse();
    }
  },
  methods: {
    rankTeam(teamToRank) {
      switch (this.rankedTeams.indexOf(teamToRank)) {
        case 0:
          return "1st";
          break;
        case 1:
          return "2nd";
          break;
        case 2:
          return "3rd";
          break;
        default:
          return `${index + 1}th`;
          break;
      }
    }
  }
}
</script>

<style scoped>
#ranking-title {
  width: fit-content;
  margin: 0;
}
</style>
