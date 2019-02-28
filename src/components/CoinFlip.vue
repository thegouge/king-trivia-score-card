<template>
  <div id="coin-flip">
    <button @click="flipCoin">Flip Coin</button>

    <div id="flip-window" v-show="flipping">
      <h3>Flipping...</h3>
    </div>

    <div v-if="heads">
      <h2>Heads!</h2>
      <img src="../assets/heads.png" alt="quarter heads" />
    </div>

    <div v-else-if="heads === false">
      <h2>Tails!</h2>
      <img src="../assets/tails.png" alt="quarter tails" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CoinFlip",
  data() {
    return {
      heads: null,
      flipping: false
    };
  },
  methods: {
    flipCoin() {
      this.flipping = true;
      setTimeout(() => {
        Math.random() > 0.5 ? (this.heads = true) : (this.heads = false);
        this.flipping = false;
      }, 500);
    }
  }
};
</script>

<style>
#coin-flip {
  text-align: center;
}
</style>
