<template>
  <div id="app">
    <h1>King Trivia Score Card</h1>

    <ul id="tab-bar">
      <li
        class="tab"
        v-for="(tab, index) in tabs"
        @click="selectedTab = tab"
        :key="index"
        :class="{ activeTab: selectedTab === tab }"
      >
        {{ tab }}
      </li>
    </ul>

    <br />

    <main>
      <ScoreBoard v-show="selectedTab === 'Score Board'" :rounds="rounds" />

      <CurrRound v-show="selectedTab === 'Current Round'" :rounds="rounds" />

      <Standings v-show="selectedTab === 'Standings'" />

      <Timer v-show="selectedTab === 'Timer'" />

      <CoinFlip v-show="selectedTab === 'Coin Flip'" />
    </main>
  </div>
</template>

<script>
import ScoreBoard from "./components/ScoreBoard";
import CurrRound from "./components/CurrRound";
import Standings from "./components/Standings";
import Timer from "./components/Timer";
import CoinFlip from "./components/CoinFlip";

export default {
  name: "App",
  components: {
    ScoreBoard,
    CurrRound,
    Standings,
    Timer,
    CoinFlip
  },
  data() {
    return {
      tabs: ["Score Board", "Current Round", "Standings", "Timer", "Coin Flip"],
      selectedTab: "Score Board",
      rounds: [
        {
          number: 1
        },
        {
          number: 2
        },
        {
          number: 3
        },
        {
          number: 4
        },
        {
          number: 5
        },
        {
          number: 6
        },
        {
          number: 7
        }
      ]
    };
  },
  mounted() {
    this.$store.commit("loadFromLocal", "_autoSave");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  margin-top: 60px;
  width: 100%;
}
h1 {
  text-align: center;
}
.close-btn {
  float: right;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
}
#tab-bar {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0 40px;
  line-height: 24px;
}

#tab-bar:before {
  z-index: 1;
}

#tab-bar:after {
  position: absolute;
  content: "";
  width: 100%;
  bottom: 0;
  left: 0;
  border-bottom: 1px solid #aaa;
  z-index: 1;
}

.tab {
  position: relative;
  z-index: 0;
  margin: 0 -3px;
  padding: 0 20px;
  border: 1px solid #aaa;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background: linear-gradient(
    to bottom,
    rgb(235, 235, 235) 50%,
    rgb(204, 203, 203) 100%
  );
  text-shadow: 0 1px white;
  display: inline-block;
  cursor: pointer;
  user-select: none;
}

.tab:before,
.tab:after {
  position: absolute;
  bottom: -1px;
  width: 6px;
  height: 6px;
  content: " ";
  border: 1px solid #aaa;
}

.tab:before {
  left: -7px;
  border-bottom-right-radius: 6px;
  border-width: 0 1px 1px 0;
  box-shadow: 1px 0.5px 0 rgb(204, 203, 203);
}

.tab:after {
  right: -7px;
  border-bottom-left-radius: 6px;
  border-width: 0 0 1px 1px;
  box-shadow: -1px 0.5px 0 rgb(204, 203, 203);
}

.activeTab {
  z-index: 2;
  border-bottom-color: white;
  background: white;
}

.activeTab:before {
  box-shadow: 2px 2px 0 white;
}

.activeTab:after {
  box-shadow: -2px 2px 0 white;
}
</style>
