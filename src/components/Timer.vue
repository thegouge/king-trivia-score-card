<template>
  <div>
    <div v-if="!this.timerId">
      <h2>Set your timer!</h2>

      <label for="minutes">Minutes</label>
      <input type="number" id="minutes" v-model="this.minutesLeft">
      
      <label for="seconds">Seconds</label>
      <input type="number" id="seconds" v-model="this.secondsLeft">
      
      <button @click="this.startTimer">Start!</button>
    </div>

    <div v-else>
      <h2>Time Remaining</h2>
      <h3>{{ this.notate(this.timeLeft) }} remaining in timer</h3>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Timer extends Vue {
  // DATA
  timerId: any = null;
  secondsLeft = 0;
  minutesLeft = 0;
  timeLeft = 0;

  // METHODS
  startTimer() {
    this.timeLeft = 60 * this.minutesLeft + this.secondsLeft;
    this.timerId = setInterval(() => {
      if (this.timeLeft === 0) {
        alert("Time's up!");
        clearInterval(this.timerId);
        this.timerId = null;
      } else {
        this.timeLeft--;
      }
    }, 1000);
  }

  notate(seconds: number) {
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
</script>

<style></style>
