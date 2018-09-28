<template>
  <form id="top-notes" @submit.prevent="onSubmit">
      <p id="in-date" class="in-field">
        <label for="date">Date:</label>
        <input id="date" type="date" @click="select('date')" v-bind:value="today" @change="updateSelf('date')">
      </p>

      <p id="in-loc" class="in-field">
        <label for="location">Location:</label>
        <input type="text" id="location" @click="select('location')" v-model="triviaLocation" @change="updateSelf('location')">
      </p>

      <p id="in-arr" class="in-field">
        <label for="arrive">Arrival Time</label>
        <input type="time" id="arrive" @click="select('arrive')" v-model="arrivalTime" @change="updateSelf('arrive')">
      </p>

      <p id="in-start" class="in-field" >
        <label for="start">Start Time</label>
        <input type="time" id="start" @click="select('start')" v-model="triviaStart" @change="updateSelf('start')">
      </p>

      <p id="in-teams" class="in-field">
        <label for="teams"># of Teams</label>
        <input type="number" id="teamNum" v-bind:value="numTeams" @click="select('num-teams')" @change="updateSelf('teamNum')">
      </p>

      <p id="in-play" class="in-field">
        <label for="players"># of Players</label>
        <input type="number" id="players" @click="select('players')" v-model="numPlayers" @change="updateSelf('players')">
      </p>

      <p id="in-emp" class="in-field">
        <label for="empty">Empty Tables</label>
        <input type="number" id="empty" @click="select('empty')" v-model="mtTables" @change="updateSelf('empty')">
      </p>

      <p id="in-notes" class="in-field">
        <label for="notes">Notes</label>
        <textarea id="internal" @click="select('notes')" v-model="otherNotes" @change="updateSelf('internal')"></textarea>
      </p>
    </form>
</template>

<script>
export default {
  name: "MetaNotes",
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
      return this.$store.state.teams.length;
    }
  },
  props: {},
  methods: {
    select(arg) {
      document.getElementById(arg).select();
    },
    updateSelf(note) {
      // let node = document.getElementById(note);
      // store.updateMeta(note, node.value);
    }
  }
}
</script>

<style scoped>
#top-notes {
  display: grid;
  grid-template-areas: "a  e" "b  f" "c  g" "d  h";
}

.in-field {
  margin: 5px;
}

#in-date {
  grid-area: a;
}

#in-loc {
  grid-area: b;
}

#in-arr {
  grid-area: c;
}

#in-start {
  grid-area: d;
}

#in-teams {
  grid-area: e;
}

#in-play {
  grid-area: f;
}

#in-emp {
  grid-area: g;
}

#in-notes {
  grid-area: h;
}
</style>
