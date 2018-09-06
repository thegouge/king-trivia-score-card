export const stand = Vue.component("standings", {
  template: `
    <div id="rank-box">
      <h2 id="ranking-title">Team Rankings</h2>
      <ul>
        <li v-for="(team, index) in rankTeams" v-bind:key="index">in {{ rankedTeams[index].place }} place: "{{ team.name }}" with {{ team.total }} points!</li>
      </ul>
    </div>
  `,
  data() {
    return {
      shared: store
    };
  },
  computed: {
    rankedTeams() {
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
      console.log(sorted);
      return sorted;
    }
  },
  props: {
    selectedTab: {
      type: String,
      required: true
    }
  },
  methods: {
    rankTeams() {

    }
  }
});