<template>
  <div id="coin-flip">
    <button @click="flipCoin">Flip Coin</button>

    <div id="flip-window" v-show="this.flipping">
      <h3>Flipping...</h3>
    </div>

    <div v-if="this.heads">
      <h2>Heads!</h2>
      <img src="../assets/heads.png" alt="quarter heads">
    </div>

    <div v-else-if="this.heads === false">
      <h2>Tails!</h2>
      <img src="../assets/tails.png" alt="quarter tails">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class CoinFlip extends Vue {
  // DATA
  heads: any = null;
  flipping: boolean = false;

  // METHODS
  flipCoin() {
    this.flipping = true;
    setTimeout(() => {
      Math.random() > 0.5 ? (this.heads = true) : (this.heads = false);
      this.flipping = false;
    }, 500);
  }
}
</script>

<style>
#coin-flip {
  text-align: center;
}
</style>
