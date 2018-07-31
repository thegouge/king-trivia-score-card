export const team = Vue.component("team", {
  template: `
    <tr class="team-line">
      <td class="num">
        <input type="number" class="team-num" min="10000" max="99999" v-model="num" @click="select('team-num')">
      </td>
      <td class="name">
        <input type="text" class="team-name" v-model="name" @change="updateSelf" @click="select('team-name')">
      </td>
      <td class="round-score" v-for="(round, roundIndex) in rounds" v-bind:key="roundIndex">
        <input type="number" class="score" v-bind:id="'score-' +  + '-' + round.number" min="-1" max="25" @change="updateSelf" v-model="rounds[roundIndex].gained" @click="select('score')">
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
          number: 1,
          gained: 0,
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
    };
  },
  computed: {
    total() {
      return this.rounds.reduce((tot, round) => tot + parseInt(round.gained), 0);
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
    updateSelf() {
      this.$emit("total-change", this);
    },
    select(arg) {
      let element = document.querySelector('.' + arg);
      // element.select();
    }
  }
});