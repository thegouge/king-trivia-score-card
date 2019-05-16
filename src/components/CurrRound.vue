<template>
  <div id="curr-round">
    <div id="round-title">
      <button
        class="round-header round-button"
        v-if="this.current > 1"
        @click="previousRound"
      >&larr;</button>
      <div class="button-sub" v-else></div>
      <h2 class="round-header">Round {{ this.current }}</h2>
      <button class="round-header round-button" v-if="this.current < 7" @click="nextRound">&rarr;</button>
      <div class="button-sub" v-else></div>
    </div>

    <h3
      class="done-grading"
      v-if="graded.length === teamArray.length && this.current !== 1 && this.teamArray.length > 0"
      style="color: green;"
    >- All teams have been graded! -</h3>
    <h3 v-else-if="this.current === 1"></h3>
    <h3
      v-else
      style="color: var(--king-trivia-red);"
    >{{ teamArray.length - graded.length }} more teams to grade!</h3>

    <form id="round-form" v-on:submit.prevent>
      <label for="curr-team">
        {{
        this.current === 1 ? "Write a Team Name!" : "Choose a team to grade"
        }}
      </label>
      <input
        list="curr-team-list"
        id="curr-team"
        name="curr-team"
        v-model="teamName"
        @change="this.reset"
        autocomplete="off"
      >
      <datalist id="curr-team-list">
        <option v-for="(team, index) in teamArray" :key="index" :value="team.teamName"/>
      </datalist>

      <br>

      <div v-if="this.current !== 4">
        <label for="num-right">Number of questions correct:</label>
        <input type="number" id="num-right" min="0" :max="roundTotal" v-model="teamRight">

        <br>

        <label for="double">Double Down?</label>
        <input type="checkbox" v-model="double">

        <div v-if="this.current <= 3">
          <label for="check-in">Did they check in on social?</label>
          <input type="checkbox" v-model="social" name="social">

          <label for="registered">What's their team number?</label>
          <input type="number" v-model="teamNum" name="registered" max="99999">
        </div>
      </div>

      <div v-if="this.current === 7">
        <label for="pen">Did they turn in their pen?</label>
        <input type="checkbox" name="pen" v-model="penPoints">

        <label for="sevTotal">How many questions are there in this round?</label>
        <input type="number" v-model="sevenTotal" id="sevTotal" max="10">
      </div>

      <div v-if="this.current === 4">
        <label for="person-points">How many points did they get?</label>
        <select id="person-points" v-model="personPoints">
          <option value="10">10pts</option>
          <option value="8">8pts</option>
          <option value="6">6pts</option>
          <option value="4">4pts</option>
          <option value="2">2pts</option>
          <option value="0" selected>0pts</option>
          <option value="-1">-1pts</option>
        </select>
      </div>

      <br>
      <button class="submit" @click="scoreRound">Submit</button>
    </form>

    <div class="graded-list">
      <ul>
        <li v-for="(team, index) in this.graded" :key="index">{{ team.teamName }} has been graded!</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { TeamType } from "../store/interfaces";

@Component
export default class CurrRound extends Vue {
  // DATA
  current = 1;
  teamName = "";
  teamNum = "";
  social = false;
  teamRight = "";
  double = false;
  personPoints = "";
  sevenTotal = "10";
  penPoints = false;

  // COMPUTED
  get teamArray() {
    return this.$store.state.teams;
  }

  get graded() {
    return this.$store.state.teams.filter((team: TeamType) => {
      return team.rounds[this.current - 1].graded;
    });
  }

  get roundTotal() {
    switch (this.current) {
      case 1:
        return 6;

      case 2:
        return 8;

      case 3:
        return 6;

      case 4:
        return 10;

      case 5:
        return 10;

      case 6:
        return 10;

      case 7:
        return parseInt(this.sevenTotal);

      default:
        return 0;
    }
  }

  // METHODS
  reset() {
    this.teamNum = "";
    this.teamRight = "";
    this.double = false;
    this.personPoints = "";
    this.penPoints = false;
  }

  nextRound() {
    this.current++;
    this.reset();
  }

  previousRound() {
    this.current--;
    this.reset();
  }

  scoreRound() {
    let newTeamNum = false;
    const doesTeamExist =
      this.teamArray.filter((team: TeamType) => team.teamName === this.teamName)
        .length === 1;
    if (this.current === 1 && !doesTeamExist) {
      this.addTeam();
    }
    const thisTeamNameArray = this.teamArray.map(
      (team: TeamType) => team.teamName
    );
    const thisTeamIndex = thisTeamNameArray.indexOf(this.teamName);
    if (thisTeamIndex < 0) {
      alert(`"${this.teamName}" is not a team!`);
    } else {
      let gradedScore = parseInt(this.teamRight);

      if (this.current === 4) {
        gradedScore = parseInt(this.personPoints);
        this.teamRight = this.personPoints;
      }

      if (this.double) {
        this.roundTotal !== parseInt(this.teamRight)
          ? (gradedScore = 0)
          : (gradedScore = 2 * this.roundTotal);
      }

      if (
        parseInt(this.teamNum) > 0 &&
        !this.teamArray[thisTeamIndex].teamNum
      ) {
        newTeamNum = true;
        gradedScore = gradedScore + 2;
        this.$store.commit("updateNum", {
          index: thisTeamIndex,
          value: this.teamNum
        });
      }

      if (this.current === 7 && this.penPoints) {
        gradedScore = gradedScore + 2;
      }

      this.$store.commit("updateRounds", {
        index: thisTeamIndex,
        round: this.current,
        score: gradedScore,
        breakdown: {
          correctAnswers: this.teamRight,
          doubleDown: this.double,
          bonus: newTeamNum || this.penPoints
        }
      });

      this.reset();
      this.teamName = "";
      const element = <HTMLInputElement>document.getElementById("curr-team");
      element.select();
    }
  }

  addTeam() {
    this.$store.commit("pushTeam", {
      teamName: this.teamName,
      teamNumber: "00000",
      rounds: [
        {
          number: 1,
          gained: 0
        },
        {
          number: 2,
          gained: 0
        },
        {
          number: 3,
          gained: 0
        },
        {
          number: 4,
          gained: 0
        },
        {
          number: 5,
          gained: 0
        },
        {
          number: 6,
          gained: 0
        },
        {
          number: 7,
          gained: 0
        }
      ],
      total: 0
    });
  }
}
</script>

<style scoped>
#curr-round {
  --form-width: 30%;
  --button-width: 30px;
  --background-color: white;
}

.round-header {
  display: inline-block;
  margin: 5px;
  user-select: none;
}

h3 {
  text-align: center;
}

#round-title {
  display: flex;
  width: var(--form-width);
  justify-content: space-around;
  padding: 10px;
  margin: auto;
}

.round-button {
  width: var(--button-width);
  border-radius: 5px;
}

.button-sub {
  width: var(--button-width);
  margin: 5px;
}

.done-grading {
  text-align: center;
  color: rgb(4, 172, 4);
}

#round-form {
  width: var(--form-width);
  margin: auto;
  padding: 20px;
  border: 3px solid #444;
  border-radius: 5px;
}

.submit {
  background: var(--king-trivia-red);
  color: white;
  margin-top: 20px;
  padding: 5px 30px;
  border-radius: 5px;
  font-weight: 700;
  border-color: black;
}

label {
  display: block;
  margin-top: 20px;
}

input {
  display: block;
  text-align: left;
}
</style>
