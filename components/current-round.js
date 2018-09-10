export const round = Vue.component("curr-round", {
  template: `
    <div>
      <div id="round-title">
        <button v-if="currentRound > 1"> <- </button>
        <h2>Round {{ currentRound }}</h2>
        <button v-if="currentRound < 7"> -> </button>
      </div>

    </div>
  `,
  data() {
    return {
      currentRound: 1,
      shared: store
    }
  },
  props: {
    rounds: {
      type: Array,
      required: true
    }
  },
  methods: {

  }
});