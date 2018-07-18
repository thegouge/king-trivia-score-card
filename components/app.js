export const app = Vue.component("app", {
  template: `
  <div id="app">
    <h1>King Trivia Score Card</h1>
    <meta-notes></meta-notes>

    <div id="toolbar">
      <button @click="addTeam">Add Team</button>
    </div>

    <div id="tab-bar">
      <div id="score-tab" @click="placings = false">Score Board</div>
      <div id="standings-tab" @click="showStandings">Team Rankings</div>
    </div>

    <standings v-bind:teamArray="teamArray" v-if="placings" @close-standings="closePlacings()"></standings>

    <score-board v-bind:teamArray="teamArray" v-if="!placings"></score-board>
  </div>
  `,
  data() {
    return {
      teamArray: [],
      placings: false
    }
  },
  methods: {
    addTeam() {
      this.teamArray.push({
        name: "",
        place: "",
        total: 0
      });
    },
    showStandings() {
      this.teamArray = this.teamArray.map((tem, index) => ({
        name: teams[index].name,
        total: teams[index].total
      }));
      this.teamArray.sort((a, b) => parseInt(a.total) < parseInt(b.total));
      this.teamArray.forEach((team, index) => {
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
    }
  }
});