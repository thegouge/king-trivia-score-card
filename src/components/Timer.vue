<template>
  <div>
    <div v-if="!timerId">
      <h2>Set your timer!</h2>

      <label for="minutes">Minutes</label>
      <input type="number" id="minutes" v-model="minutesLeft" />

      <label for="seconds">Seconds</label>
      <input type="number" id="seconds" v-model="secondsLeft" />

      <button @click="startTimer">Start!</button>
    </div>

    <div v-else>
      <h2>Time Remaining</h2>
      <h3>{{ notate(timeLeft) }} remaining in timer</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timer",
  data() {
    return {
      timerId: null,
      secondsLeft: 0,
      minutesLeft: 0,
      timeLeft: 0
    };
  },
  computed: {},
  methods: {
    startTimer() {
      this.timeLeft =
        60 * parseInt(this.minutesLeft) + parseInt(this.secondsLeft);
      this.timerId = setInterval(() => {
        if (this.timeLeft === 0) {
          alert("Time's up!");
          clearInterval(this.timerId);
          this.timerId = null;
        } else {
          this.timeLeft--;
        }
      }, 1000);
    },
    notate(seconds) {
      let hours = 0;
      let minutes = 0;

      while (seconds > 60) {
        seconds -= 60;
        minutes++;
      }

      while (minutes > 60) {
        minutes -= 60;
        hours++;
      }

      return `${minutes} minutes ${seconds} seconds`;
    }
  }
};
</script>

<style></style>
