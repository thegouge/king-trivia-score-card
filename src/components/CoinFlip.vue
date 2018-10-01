<template>
  <div id="coin-flip">
    <h2 v-if="heads === null">Flip it!</h2>
    <button @click="flipCoin">Flip Coin</button>
    
    <div v-if="heads">
      <h2>Heads!</h2>
      <img src="../../assets/heads.png" alt="quarter heads">
    </div>

    <div v-else-if="heads === false">
      <h2>Tails!</h2>
      <img src="../../assets/tails.png" alt="quarter tails">
    </div>
  </div>
</template>

<script>
export default {
  name: "CoinFlip",
  data() {
    return {
      heads: null
    }
  },
  methods: {
    flipCoin() {
      (Math.random() >= 0.5) ? this.heads = true : this.heads = false
    }
  }
}
</script>

<style>
#coin-flip {
  text-align: center;
}
</style>

