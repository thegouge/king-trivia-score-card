Vue.component("team", {
  template: `
    <div class="team-line">
      <input type="number" class="team-num" min="10000" max="99999" v-model="num">
      <input type="text" class="team-name" v-model="name">

      <div class="round-score" v-for="(round, roundIndex) in rounds" v-bind:key="roundIndex">
        <input type="number" class="score" min="0" max="25" v-model="rounds[roundIndex].gained">
        <span v-if="roundIndex > 0" class="total">{{ (rounds[roundIndex].gained > 0) ? getRoundTotal(roundIndex) : 0 }}</span>
      </div>

      <div class="team-total">{{ total }}</div>
    </div>
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
      return this.rounds.reduce((tot, round) => tot += parseInt(round.gained), 0);
    }
  },
  methods: {
    getRoundTotal(index) {
      let result = 0;
      for (let i = 0; i < index + 1; i++) {
        result += parseInt(this.rounds[i].gained);
      }
      return result;
    }
  }
});