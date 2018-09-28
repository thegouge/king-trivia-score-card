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
      const placing = this.rankedTeams.indexOf(teamToRank) + 1;
      const lastNum = placing.toString().slice(-1);
      console.log(lastNum);
      if(placing === 11 || placing === 12 || placing === 13) {
        return `${placing}th`;
      } else {
        switch(lastNum) {
          case "1":
            return `${placing}st`;
            break;

          case "2":
            return `${placing}nd`;
            break;
          
          case "3":
            return `${placing}rd`;
            break;

          default:
            return `${placing}th`;
        }
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
