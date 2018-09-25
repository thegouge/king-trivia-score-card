<template>
  <div id="rank-box">
      <h2 id="ranking-title">Team Rankings</h2>
      <ul>
        <li v-for="(team, index) in this.shared.state.rankedTeams" v-bind:key="index">in {{ team.place }} place: "{{ team.name }}" with {{ team.total }} points!</li>
      </ul>
    </div>
</template>

<script>
import store from "../assets/store";

export default {
  data() {
    return {
      shared: store
    };
  }
}
</script>

<style scoped>
#ranking-title {
  width: fit-content;
  margin: 0;
}
</style>
