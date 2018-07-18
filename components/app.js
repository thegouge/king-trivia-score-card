export const app = Vue.component("app", {
  template: `
  <div id="app">
    <h1>King Trivia Score Card</h1>
    <meta-notes></meta-notes>
    <score-board v-bind:teamArray="teamArray" @add-team="add" @update-rankings="updateTeams"></score-board>
  </div>
  `,
  data() {
    return {
      teamArray: [],
    }
  },
  methods: {
    add() {
      this.teamArray.push({
        name: "",
        place: "",
        total: 0
      });
    },
    updateTeams(teams) {
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
    }
  }
});