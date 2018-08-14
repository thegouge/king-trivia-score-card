export const meta = Vue.component("meta-notes", {
  template: `
  <form id="top-notes" @submit.prevent="onSubmit">
      <p id="in-date" class="in-field">
        <label for="date">Date:</label>
        <input id="date" type="date" @click="select('date')" v-bind:value="today">
      </p>

      <p id="in-loc" class="in-field">
        <label for="location">Location:</label>
        <input type="text" id="location" @click="select('location')" v-model="triviaLocation">
      </p>

      <p id="in-arr" class="in-field">
        <label for="arrive">Arrival Time</label>
        <input type="time" id="arrive" @click="select('arrive')" v-model="arrivalTime">
      </p>

      <p id="in-start" class="in-field" >
        <label for="start">Start Time</label>
        <input type="time" id="start" @click="select('start')" v-model="triviaStart">
      </p>

      <p id="in-teams" class="in-field">
        <label for="teams"># of Teams</label>
        <input type="number" id="num-teams" v-bind:value="numTeams" @click="select('num-teams')">
      </p>

      <p id="in-play" class="in-field">
        <label for="players"># of Players</label>
        <input type="number" id="players" @click="select('players')" v-model="numPlayers">
      </p>

      <p id="in-emp" class="in-field">
        <label for="empty">Empty Tables</label>
        <input type="number" id="empty" @click="select('empty')" v-model="mtTables">
      </p>

      <p id="in-notes" class="in-field">
        <label for="notes">Notes</label>
        <textarea id="notes" @click="select('notes')" v-model="otherNotes"></textarea>
      </p>
    </form>
  `,
  data() {
    return {
      triviaLocation: "",
      arrivalTime: "",
      triviaStart: "",
      numPlayers: 0,
      mtTables: 0,
      otherNotes: ""
    }
  },
  computed: {
    today() {
      let fullDay = new Date().toISOString();
      return fullDay.substring(0, 10);
    },
    numTeams() {
      return this.teamArray.length;
    }
  },
  props: {
    teamArray: {
      type: Array,
      required: false
    }
  },
  methods: {
    select(arg) {
      document.getElementById(arg).select();
    }
  }
});