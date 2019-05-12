<template>
  <tr class="team-line">
    <td class="team-box">
      {{ index + 1 }}.
      <input
        type="number"
        class="team-num"
        :id="'team-num-' + index"
        min="10000"
        max="99999"
        @click="select('team-num')"
        v-model="teamNum"
      >
    </td>
    <td class="name">
      <input
        type="text"
        class="team-name"
        :id="'team-name-' + index"
        v-model="teamName"
        @click="select('team-name')"
        tabindex="1"
      >
    </td>
    <td
      class="round-score"
      v-for="(round, roundIndex) in this.rounds"
      :key="roundIndex"
      :title="setUpRoundBreakdown(round)"
    >
      <input
        type="number"
        class="score"
        :id="'score-' + index + '-' + parseInt(roundIndex + 1)"
        min="-1"
        max="25"
        :value="rounds[roundIndex].gained"
        @change="updateRound"
        @click="select('score', roundIndex + 1)"
        :tabindex="roundIndex + 2"
      >

      <span
        v-if="roundIndex > 0"
        class="total"
      >{{ rounds[roundIndex].gained === 0 ? 0 : getRoundTotal(roundIndex) }}</span>
    </td>
    <td class="team-total">{{ total }}</td>
  </tr>
</template>

<script lang="ts">
// import Vue from "vue";
import { Vue, Component, Prop } from "vue-property-decorator";
import { Round } from "../store/interfaces";

@Component
export default class Team extends Vue {
  //PROPS
  @Prop(Number) index!: number;
  // Calculated
  get teamNum() {
    return this.$store.state.teams[this.index].teamNum;
  }
  set teamNum(newNum) {
    this.$store.commit("updateNum", { value: newNum, index: this.index });
  }
  get teamName() {
    return this.$store.state.teams[this.index].teamName;
  }
  set teamName(newName: string) {
    this.$store.commit("updateName", { value: newName, index: this.index });
  }
  get rounds() {
    return this.$store.state.teams[this.index].rounds;
  }
  get total() {
    return this.rounds.reduce(
      (total: number, round: Round) => total + round.gained,
      0
    );
  }
  // Methods
  getRoundTotal(index: number) {
    let result = 0;
    for (let i = 0; i < index + 1; i++) {
      result += parseInt(this.rounds[i].gained);
    }
    return result;
  }
  updateRound(event: any) {
    const roundScore = parseInt(event.target.value);
    const roundToScore = parseInt(event.target.id.slice(-1));
    this.$store.commit("updateRounds", {
      round: roundToScore,
      score: roundScore,
      index: this.index
    });
  }
  setUpRoundBreakdown(round: Round) {
    if (!round.breakdown) return null;

    const { correctAnswers, doubleDown, bonus } = round.breakdown;

    let resultString = `Correct Answers: ${correctAnswers}` + "\n";

    resultString += doubleDown
      ? `Double Down: ${String.fromCharCode(0x2713)}` + "\n"
      : "";

    resultString += bonus ? "Bonus Points: 2\n" : "";

    return resultString;
  }
  select(arg: string) {
    let id;
    if (arg === "score") {
      id = `score-${this.index}-${arguments[1]}`;
    } else {
      id = `${arg}-${this.index}`;
    }

    const element: HTMLInputElement = document.getElementById(
      id
    ) as HTMLInputElement;
    element.select();
  }
}
</script>

<style>
.team-line:nth-child(even) {
  background: rgb(201, 201, 201);
}
</style>
