export const round = Vue.component("curr-round", {
  template: `
    <div>
      <div id="round-title">
        <button class="round-header" v-if="current > 1" @click="previousRound"> <- </button>
        <h2 class="round-header">Round {{ current }}</h2>
        <button class="round-header" v-if="current < 7" @click="nextRound"> -> </button>
      </div>

      <form v-if="current != 4" id="round-form" v-on:submit.prevent>
        <label for="curr-team">Choose a Team to Grade</label>
          <input list="curr-team-list" id="curr-team" name="curr-team" v-model="teamName" autocomplete="off">
          <datalist id="curr-team-list">
            <option v-for="team in shared.state.teams" :value="team.name"> {{ team.name }} </option>
          </datalist>

        <label for="num-right">Number of Questions Correct:</label>
        <input type="number" id="num-right" min="0" :max="currentRound.questions" v-model="teamRight">

        <label for="double">Double Down?</label>
        <input type="checkbox" v-model="double" />

        <button @click="scoreRound">Submit</button>
      </form>

      <form v-else="current == 4" id="round-4-form" v-on:submit.prevent>
        <label for="curr-team">Choose a Team to Grade</label>
          <input list="curr-team-list" id="curr-team" name="curr-team" v-model="teamName" autocomplete="off">
          <datalist id="curr-team-list">
            <option v-for="team in shared.state.teams" :value="team.name"> {{ team.name }} </option>
          </datalist>

        <label for="guess">How Was Their Guess?</label>
          <input type="radio" name="guess" id="right-guess" value="right">correct</input>
          <input type="radio" name="guess" id="wrong-guess" value="wrong">incorrect</input>

        <label for="clues">Which Clue were you on?</label>
          <input type="radio" name="clue" value="10">10pt</input>
          <input type="radio" name="clue" value="8">8pt</input>
          <input type="radio" name="clue" value="6">6pt</input>
          <input type="radio" name="clue" value="4">4pt</input>
          <input type="radio" name="clue" value="2">2pt</input>

        <button @click="scoreRound">Submit</button>
      </form>

      <div class="graded-list">
        <ul>
          <li v-for="team in graded">{{ team.name }} has been graded!</li>
        </ul>
      </div>
    </div>
  `,
  data() {
    return {
      current: 1,
      teamName: "",
      teamRight: null,
      double: false,
      shared: store
    }
  },
  computed: {
    currentRound() {
      return this.rounds[this.current - 1];
    },
    graded() {
      return this.shared.state.teams.filter((team) => {
        return team.rounds[this.current - 1].graded;
      });
    }
  },
  props: {
    rounds: {
      type: Array,
      required: true
    }
  },
  methods: {
    nextRound() {
      this.current++;
    },
    previousRound() {
      this.current--;
    },
    scoreRound() {
      let teamNameArray = this.shared.state.teams.map((team) => team.name);
      let thisTeamIndex = teamNameArray.indexOf(this.teamName);
      if (thisTeamIndex < 0) {
        alert(`"${this.teamName}" is not a team!`);
      } else {
        let roundTotal = this.rounds[this.current - 1].questions;
        let gradedScore = this.teamRight;

        if (this.double) {
          roundTotal > this.teamRight ? gradedScore = 0 : gradedScore = 2 * roundTotal;
        }

        this.shared.gradeRound(this.current, thisTeamIndex, gradedScore);
      }
    }
  }
});