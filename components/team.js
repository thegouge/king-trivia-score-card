export const team = Vue.component("team", {
  template: `
    <tr class="team-line">
      <td class="team-box">{{ index + 1 }}. <input type="number" class="team-num" :id="'team-num-' + index" min="10000" max="99999" @click="select('team-num')" v-model="teamNum">
      </td>
      <td class="name">
        <input type="text" class="team-name" :id="'team-name-' + index" v-model="name" @change="updateSelf" @click="select('team-name')" tabindex="1">
      </td>
      <td class="round-score" v-for="(round, roundIndex) in rounds" v-bind:key="roundIndex">
        <input type="number" class="score" :id="'score-' + index + '-' + round.number" min="-1" max="25" @change="updateSelf" v-model="rounds[roundIndex].gained" @click="select('score', round.number)" :tabindex="roundIndex + 2">
        <span v-if="roundIndex > 0" class="total">{{ (rounds[roundIndex].gained === 0) ? 0 : getRoundTotal(roundIndex) }}</span>
      </td>
      <td class="team-total">{{ total }}</td>
    </tr>
  `,
  data() {
    return {
      name: "",
      teamNum: "00000",
      rounds: [{
          number: 1,
          gained: 0,
        },
        {
          number: 2,
          gained: 0,
        },
        {
          number: 3,
          gained: 0,
        },
        {
          number: 4,
          gained: 0,
        },
        {
          number: 5,
          gained: 0,
        },
        {
          number: 6,
          gained: 0,
        },
        {
          number: 7,
          gained: 0,
        }
      ],
    };
  },
  computed: {
    total() {
      return this.rounds.reduce((tot, round) => tot + parseInt(round.gained), 0);
    }
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    data: {
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
    updateSelf() {
      store.updateTeam(this, this.index);
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
});