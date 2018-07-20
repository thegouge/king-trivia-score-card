export const stand = Vue.component("standings", {
  template: `
    <div id="rank-modal">
      <div id="rank-box">
        <span class="close-btn" @click="closeStandings">&times;</span>
        <h2 id="ranking-title">Team Rankings</h2>
        <ul>
          <li v-for="(team, index) in teamArray" v-bind:key="index">in {{ team.place }} place: "{{ team.name }}" with {{ team.total }} points!</li>
        </ul>
      </div>
    </div>
  `,
  props: {
    teamArray: {
      type: Array,
      required: true
    }
  },
  methods: {
    closeStandings() {
      this.$emit("close-standings");
    }
  }
});