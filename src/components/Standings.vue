<template>
  <div id="rank-box">
    <h2 id="ranking-title">Team Rankings</h2>
    <ul>
      <li v-for="(team, index) in this.rankedTeams" :key="index">
        in {{ rankTeam(team) }} place: "{{ team.teamName }}" with
        {{ team.total }} points!
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { TeamType } from "../store/interfaces";

@Component
export default class Standings extends Vue {
  // Computed
  get teams() {
    return this.$store.state.teams.map((team: TeamType) => {
      return { teamName: team.teamName, total: team.total };
    });
  }
  get rankedTeams() {
    return this.$store.getters.rankedTeams;
  }

  // Methods
  rankTeam(teamToRank: TeamType) {
    const placing = this.rankedTeams.indexOf(teamToRank) + 1;
    const lastNum = placing.toString().slice(-1);
    if (placing === 11 || placing === 12 || placing === 13) {
      return `${placing}th`;
    } else {
      switch (lastNum) {
        case "1":
          return `${placing}st`;

        case "2":
          return `${placing}nd`;

        case "3":
          return `${placing}rd`;

        default:
          return `${placing}th`;
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
