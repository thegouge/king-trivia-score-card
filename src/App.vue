<template>
  <div id="app">
    <header>
      <img
        class="king-trivia-logo"
        src="https://kingtrivia.com/wp-content/uploads/2016/07/King-Trivia-1.jpg"
        alt="King Trivia"
        @click="this.simulateLink"
      />
      <h1>King Trivia Score Card</h1>
    </header>

    <br />

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

    <footer>
      made by
      <a href="https://thegouge.github.io">Alex Gouge-Schajer</a>
      <br />if you're confused and want to learn how to use this
      <strong>Glorius</strong> app, check out the
      <a
        href="https://github.com/thegouge/king-trivia-score-card/blob/master/README.md"
        >README</a
      >
      for this project
    </footer>
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
    CoinFlip,
  },
  data() {
    return {
      tabs: ["Score Board", "Current Round", "Standings", "Timer", "Coin Flip"],
      selectedTab: "Score Board",
      rounds: [
        {
          number: 1,
        },
        {
          number: 2,
        },
        {
          number: 3,
        },
        {
          number: 4,
        },
        {
          number: 5,
        },
        {
          number: 6,
        },
        {
          number: 7,
        },
      ],
    };
  },
  methods: {
    simulateLink() {
      window.location.href = "https://kingtrivia.com/";
    },
  },
  mounted() {
    this.$store.commit("loadFromLocal", "_autoSave");
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Raleway|Roboto");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Roboto", Open Sans, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  margin-top: 30px;

  --king-trivia-red: #ab192d;
  --header-font-family: "Raleway", Helvetica, Arial;
}

header {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.king-trivia-logo {
  max-height: 52px;
  align-self: center;
  cursor: pointer;
}

h1 {
  margin-right: 10%;
  line-height: 52px;
  font-family: var(--header-font-family);
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

footer {
  background: #111111;
  color: #a8a8a8;
  padding: 22px;
  margin-top: 50px;
}

footer a {
  color: inherit;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1em;
  transition: 0.5s;
}

footer a:hover {
  color: orange;
}

@media only screen and (max-width: 950px) {
  #tab-bar {
    padding: 0;
  }

  #top-notes {
    width: 100%;
  }
}

@media only screen and (max-width: 600px) {
  h1 {
    margin-right: 0;
  }

  .tab:before,
  .tab:after {
    position: relative;
    width: 0;
    height: 0;
    border: none;
    content: "";
    box-shadow: none;
  }

  .tab {
    line-height: inherit;
    border-radius: 0;
    background: var(--king-trivia-red);
    color: white;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 5px 30px;
    font-weight: 700;
    border-color: black;
    cursor: pointer;
  }

  .activeTab {
    background: white;
    color: var(--king-trivia-red);
  }
}
</style>
