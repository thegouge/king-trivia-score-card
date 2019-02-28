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
      />
    </td>
    <td class="name">
      <input
        type="text"
        class="team-name"
        :id="'team-name-' + index"
        v-model="teamName"
        @click="select('team-name')"
        tabindex="1"
      />
    </td>
    <td
      class="round-score"
      v-for="(round, roundIndex) in rounds"
      :key="roundIndex"
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
      />

      <span v-if="roundIndex > 0" class="total">{{
        rounds[roundIndex].gained === 0 ? 0 : getRoundTotal(roundIndex)
      }}</span>
    </td>
    <td class="team-total">{{ total }}</td>
  </tr>
</template>

<script lang="ts">
export default {
  name: "Team",
  data() {
    return {};
  },
  computed: {
    teamNum: {
      get() {
        return this.$store.state.teams[this.index].teamNum;
      },
      set(newNum) {
        this.$store.commit("updateNum", { value: newNum, index: this.index });
      }
    },
    teamName: {
      get() {
        return this.$store.state.teams[this.index].teamName;
      },
      set(newName) {
        this.$store.commit("updateName", { value: newName, index: this.index });
      }
    },
    rounds() {
      return this.$store.state.teams[this.index].rounds;
    },
    total() {
      return this.rounds.reduce((total, round) => total + round.gained, 0);
    }
  },
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    getRoundTotal(index) {
      let result = 0;
      for (let i = 0; i < index + 1; i++) {
        result += parseInt(this.rounds[i].gained);
      }
      return result;
    },
    updateRound(event) {
      const roundScore = parseInt(event.target.value);
      const roundToScore = parseInt(event.target.id.slice(-1));
      this.$store.commit("updateRounds", {
        round: roundToScore,
        score: roundScore,
        index: this.index
      });
    },
    select(arg) {
      let id;
      if (arg === "score") {
        id = `score-${this.index}-${arguments[1]}`;
      } else {
        id = `${arg}-${this.index}`;
      }

      let element = document.getElementById(id);
      element.select();
    }
  }
};
</script>

<style>
.team-line:nth-child(even) {
  background: rgb(201, 201, 201);
}
</style>
