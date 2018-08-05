export const meta = Vue.component("meta-notes", {
  template: `
  <form id="top-notes" @submit.prevent="onSubmit">
      <p id="in-date" class="in-field">
        <label for="date">Date:</label>
        <input id="date" type="date" @click="select('date')">
      </p>

      <p id="in-loc" class="in-field">
        <label for="location">Location:</label>
        <input type="text" id="location" @click="select('location')">
      </p>

      <p id="in-arr" class="in-field">
        <label for="arrive">Arrival Time</label>
        <input type="time" id="arrive" @click="select('arrive')">
      </p>

      <p id="in-start" class="in-field" >
        <label for="start">Start Time</label>
        <input type="time" id="start" @click="select('start')">
      </p>

      <p id="in-teams" class="in-field">
        <label for="teams"># of Teams</label>
        <input type="number" id="num-teams" v-bind:value="this.teamArray.length" @click="select('num-teams')">
      </p>

      <p id="in-play" class="in-field">
        <label for="players"># of Players</label>
        <input type="number" id="players" @click="select('players')">
      </p>

      <p id="in-emp" class="in-field">
        <label for="empty">Empty Tables</label>
        <input type="number" id="empty" @click="select('empty')">
      </p>

      <p id="in-notes" class="in-field">
        <label for="notes">Notes</label>
        <textarea id = "notes" @click = "select('notes')"></textarea>
      </p>
    </form>
  `,
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