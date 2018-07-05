Vue.component("score-board", {
  template: `
  <main id="scores">
    <button @click="addTeam">Add Team</button>
    <button @click="showStandings">Show Standings</button>

    <standings v-bind:teamRankings="teamRankings" v-if="placings" @close-standings="placings = false"></standings>
    <section id="body">
      <div class="top-bar">
        <h2 id="num-title">Team#</h2>
        <h2 id="name-title">Team Name</h2>

        <h2 class="round-num" v-for="round in rounds">{{ round }}</h2>
        <h2 class="round-num" id="total-title">Total</h2>

      </div>
        <team v-for="team in teamRankings" ref="tems"></team>
    </section>
  </main>
  `,
  data() {
    return {
      teamRankings: [],
      placings: false,
      rounds: [
        "Round 1",
        "Round 2",
        "Round 3",
        "Round 4",
        "Round 5",
        "Round 6",
        "Round 7",
      ]
    }
  },
  computed: {
    teams() {
      return this.$refs.tems;
    }
  },
  methods: {
    addTeam() {
      this.teamRankings.push({
        name: "",
        total: 0
      });
    },
    showStandings() {
      this.teamRankings = this.teamRankings.map((rank, index) => {
        return {
          name: this.teams[index].name,
          total: this.teams[index].total
        }
      });
      this.teamRankings.sort((a, b) => parseInt(a.total) < parseInt(b.total));
      this.placings = true;
      console.log(this.teamRankings);
    }
  }
});