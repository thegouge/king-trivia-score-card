Vue.component("standings", {
  template: `
    <div id="rank-board">
      <h2>Team Rankings</h2>
      <span class="close-btn" @click="closeStandings">&times;</span>
      <ul>
        <li v-for="(team, index) in teamRankings">in {{ index + 1 }}: "{{ team.name }}" with {{ team.total }} points!</li>
      </ul>
    </div>
  `,
  props: {
    teamRankings: {
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