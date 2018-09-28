<template>
  <div>
      <div id="round-title">
        <button class="round-header" v-if="current > 1" @click="previousRound"> &larr; </button>
        <h2 class="round-header">Round {{ current }}</h2>
        <button class="round-header" v-if="current < 7" @click="nextRound"> &rarr; </button>
      </div>

      <form v-if="current != 4" id="round-form" v-on:submit.prevent>
        <label for="curr-team">Choose a Team to Grade</label>
          <input list="curr-team-list" id="curr-team" name="curr-team" v-model="teamName" autocomplete="off">
          <datalist id="curr-team-list">
            <option v-for="(team, index) in teamArray" :key="index" :value="team.name"> {{ team.name }} </option>
          </datalist>

        <label for="num-right">Number of Questions Correct:</label>
        <input type="number" id="num-right" min="0" :max="currentRound.questions" v-model="teamRight">

        <label for="double">Double Down?</label>
        <input type="checkbox" v-model="double" />

        <button @click="scoreRound">Submit</button>
      </form>

      <form v-else id="round-4-form" v-on:submit.prevent>
        <label for="curr-team">Choose a Team to Grade</label>
          <input list="curr-team-list" id="curr-team" name="curr-team" v-model="teamName" autocomplete="off">
          <datalist id="curr-team-list">
            <option v-for="(team, index) in teamArray" :key="index" :value="team.name"> {{ team.name }} </option>
          </datalist>

        <label for="guess">How Was Their Guess?</label>
          <input type="radio" name="guess" id="right-guess" value="right">
          <input type="radio" name="guess" id="wrong-guess" value="wrong">

        <label for="clues">Which Clue were you on?</label>
          <input type="radio" name="clue" value="10" />
          <input type="radio" name="clue" value="8" />
          <input type="radio" name="clue" value="6" />
          <input type="radio" name="clue" value="4" />
          <input type="radio" name="clue" value="2" />

        <button @click="scoreRound">Submit</button>
      </form>

      <div class="graded-list">
        <ul>
          <li v-for="(team, index) in graded" :key="index">{{ team.teamName }} has been graded!</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "CurrRound",
  data() {
    return {
      current: 1,
      teamName: "",
      teamRight: null,
      double: false
    }
  },
  computed: {
    teamArray() {
      return this.$store.state.teams;
    },
    currentRound() {
      return this.rounds[this.current - 1];
    },
    graded() {
      return this.teamArray.filter(team => {
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
      let teamNameArray = this.teamArray.map((team) => team.name);
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
}
</script>

<style scoped>
.round-header {
  display: inline-block;
}

#round-title {
  text-align: center;
}
</style>
