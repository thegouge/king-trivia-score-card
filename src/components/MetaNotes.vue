<template>
  <form 
  id="top-notes" 
  @submit.prevent="onSubmit">
    <p id="in-date" 
    class="in-field">
      <label for="date">Date:</label>
      <input type="date" 
      id="date" 
      @click="select('date')" 
      v-model="today">
    </p>

    <p 
    id="in-loc" 
    class="in-field">
      <label for="location">Location:</label>
      <input type="text" 
      id="location" 
      v-model="triviaLocation" 
      @click="select('location')">
    </p>

    <p id="in-arr" 
    class="in-field">
      <label for="arrive">Arrival Time</label>
      <input type="time" id="arrive" 
      v-model="arrivalTime" 
      @click="select('arrive')">
    </p>

    <p id="in-start" 
    class="in-field" >
      <label for="start">Start Time</label>
      <input type="time" id="start" 
      v-model="arrivalTime" 
      @click="select('start')">
    </p>

    <p id="in-teams" 
    class="in-field">
      <label for="teams"># of Teams</label>
      <input type="number" id="teamNum" 
      v-bind:value="numTeams" 
      @click="select('num-teams')">
    </p>

    <p id="in-play" 
    class="in-field">
      <label for="players"># of Players</label>
      <input type="number" id="players" 
      @click="select('players')"  
      v-model="numPlayers">
    </p>

    <p id="in-emp" 
    class="in-field">
      <label for="empty">Empty Tables</label>
      <input type="number" id="empty" 
      @click="select('empty')"  
      v-model="mtTables">
    </p>

    <p id="in-notes" 
    class="in-field">
      <label for="notes">Notes</label>
      <textarea id="internal" 
      @click="select('notes')"  
      v-model="otherNotes"></textarea>
    </p>
  </form>
</template>

<script>
export default {
  name: "MetaNotes",
  data() {
    return {}
  },
  computed: {
    today: {
      get() {
        if(!this.$store.state.metaData.date) {
          let fullDay = new Date();
          return `${fullDay.getFullYear()}-${('0' + (fullDay.getMonth() + 1)).slice(-2)}-${('0' + (fullDay.getDate())).slice(-2)}`;
        } else {
          return this.$store.state.metaData.date;
        }
      },
      set(newDate) {
        this.updateMeta('date', newDate);
      }
    },
    triviaLocation: {
      get() {
        return this.$store.state.metaData.location;
      },
      set(newLoc) {
        this.updateMeta('location', newLoc);
      }
    },
    arrivalTime: {
      get() {
        return this.$store.state.metaData.arrive;
      },
      set(newArrive) {
        this.updateMeta('arrive', newArrive);
      }
    },
    triviaStart: {
      get() {
        return this.$store.state.metaData.start;
      },
      set(newStart) {
        this.updateMeta('start', newStart);
      }
    },
    numTeams: {
      get() {
        return this.$store.getters.numTeams;
      },
      set(newTeams) {
        this.updateMeta('teams', newTeams);
      }
    },
    numPlayers: {
      get() {
        return this.$store.state.metaData.players;
      },
      set(newPlayers) {
        this.updateMeta('players', newPlayers);
      }
    },
    mtTables: {
      get() {
        return this.$store.state.metaData.empty;
      },
      set(newTables) {
        this.updateMeta('empty', newTables);
      }
    },
    otherNotes: {
      get() {
        return this.$store.state.metaData.internal;
      },
      set(newNote) {
        this.updateMeta('internal', newNote);
      }
    }
  },
  props: {},
  methods: {
    select(arg) {
      document.getElementById(arg).select();
    },
    updateMeta(note, newValue) {
      this.$store.commit("updateMeta", {noteToUpdate: note, value: newValue});
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
