export const main = new Vue({
  el: "#vue",
  template: `
  <div id="app">
    <h1>King Trivia Score Card</h1>

    <ul id="tab-bar">
        <li class="tab" v-for="(tab, index) in tabs" @click="selectedTab = tab" :key="index" :class="{ activeTab: selectedTab === tab }">
          {{ tab }}
        </li>
    </ul>

    <br>

    <main>
      <score-board v-show='selectedTab === "Score Board"' v-bind:rounds="rounds" />

      <curr-round v-show='selectedTab === "Current Round"' v-bind:rounds="rounds" />

      <standings v-show='selectedTab === "Standings"' v-bind:selectedTab="selectedTab" />

    </main>

  </div>
  `,
  data: {
    tabs: ["Score Board", "Current Round", "Standings"],
    selectedTab: "Score Board",
    rounds: [{
        number: 1,
        questions: 6
      },
      {
        number: 2,
        questions: 8
      },
      {
        number: 3,
        questions: 6
      },
      {
        number: 4,
        questions: 1
      },
      {
        number: 5,
        questions: 10
      },
      {
        number: 6,
        questions: 10
      },
      {
        number: 7,
        questions: 10
      },
    ],
    shared: store
  },
  methods: {

  }
});