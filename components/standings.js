export const stand = Vue.component("standings", {
  template: `
    <div id="rank-box">
      <h2 id="ranking-title">Team Rankings</h2>
      <ul>
        <li v-for="(team, index) in this.shared.state.rankedTeams" v-bind:key="index">in {{ team.place }} place: "{{ team.name }}" with {{ team.total }} points!</li>
      </ul>
    </div>
  `,
  data() {
    return {
      shared: store
    };
  }
});