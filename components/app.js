export const app = Vue.component("app", {
  template: `
  <div id="app">
    <h1>King Trivia Score Card</h1>
    <meta-notes v-bind:teamArray="teamArray" ref="metaNotes"></meta-notes>

    <div id="toolbar">
      <button @click="addTeam">Add Team</button>
      <button @click="showStandings">Show Standings</button>
      <button @click="exportFile">Export</button>
    </div>

    <standings v-bind:teamArray="teamArray" v-if="placings" @close-standings="closePlacings"></standings>

    <score-board v-bind:teamArray="teamArray" @passed="upTeam"></score-board>
  </div>
  `,
  data() {
    return {
      teamArray: [{
        name: "",
        place: "",
        total: 0
      }, {
        name: "",
        place: "",
        total: 0
      }, {
        name: "",
        place: "",
        total: 0
      }],
      placings: false,
      shared: store
    };
  },
  methods: {
    addTeam() {
      this.teamArray.push({
        name: "",
        place: "",
        total: 0
      });
    },
    upTeam(team, index) {
      this.teamArray[index] = {
        name: team.name,
        place: "",
        total: team.total
      };
      store.updateTeam(team, index);
    },
    showStandings() {
      let sorted = this.teamArray.sort(
        (a, b) => parseInt(a.total) < parseInt(b.total)
      );
      sorted.forEach((team, index) => {
        switch (index) {
          case 0:
            team.place = "1st";
            break;
          case 1:
            team.place = "2nd";
            break;
          case 2:
            team.place = "3rd";
            break;
          default:
            team.place = `${index + 1}th`;
            break;
        }
      });
      this.placings = true;
    },
    closePlacings() {
      this.placings = false;
    },
    exportFile() {
      store.updateMeta(this.$refs.metaNotes);
    }
  }
});