export const app = Vue.component("app", {
  template: `
  <div id="app">
    <h1>King Trivia Score Card</h1>

    <button @click="showStandings">Show Standings</button>

    <standings v-if="placings" @close-standings="closePlacings"></standings>

    <score-board v-bind:rounds="rounds"></score-board>
  </div>
  `,
  data() {
    return {
      placings: false,
      rounds: [{
          number: 1,
          questions: 6
        },
        {
          number: 2,
          questions: 8
        },
        {
          number: 3,
          questions: 6
        },
        {
          number: 4,
          questions: 1
        },
        {
          number: 5,
          questions: 10
        },
        {
          number: 6,
          questions: 10
        },
        {
          number: 7,
          questions: 10
        },
      ],
      shared: store
    };
  },
  methods: {
    showStandings() {
      let sorted = store.state.teams.sort((a, b) => {
        let first = parseInt(a.total);
        let second = parseInt(b.total);
        if (first < second) {
          return 1;
        } else if (second < first) {
          return -1;
        }
        return 0;
      });
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
    }
  }
});