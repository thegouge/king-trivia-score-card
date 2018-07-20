export const team = Vue.component("team", {
  template: `
    <tr class="team-line">
      <td class="num">
        <input type="number" class="team-num" min="10000" max="99999" v-model="num">
      </td>
      <td class="name">
        <input type="text" class="team-name" v-model="name">
      </td>
      <td class="round-score" v-for="(round, roundIndex) in rounds" v-bind:key="roundIndex">
        <input type="number" class="score" min="-1" max="25" v-model="rounds[roundIndex].gained">
        <span v-if="roundIndex > 0" class="total">{{ (rounds[roundIndex].gained == 0) ? 0 : getRoundTotal(roundIndex) }}</span>
      </td>
      <td class="team-total">{{ total }}</td>
    </tr>
  `,
  data() {
    return {
      name: "",
      num: 0,
      rounds: [{
          round: 1,
          gained: 0,
        },
        {
          round: 2,
          gained: 0,
        },
        {
          round: 3,
          gained: 0,
        },
        {
          round: 4,
          gained: 0,
        },
        {
          round: 5,
          gained: 0,
        },
        {
          round: 6,
          gained: 0,
        },
        {
          round: 7,
          gained: 0,
        }
      ]
    };
  },
  computed: {
    total() {
      return this.rounds.reduce((tot, round) => tot + parseInt(round.gained), 0);
    }
  },
  methods: {
    getRoundTotal(index) {
      this.$emit("change", this);
      let result = 0;
      for (let i = 0; i < index + 1; i++) {
        result += parseInt(this.rounds[i].gained);
      }
      return result;
    }
  }
});