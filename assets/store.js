let store = {
  debug: true,
  state: {
    metaData: {
      date: "",
      location: "",
      arrival: "",
      start: "",
      teamNum: "",
      players: "",
      mtTables: "",
      internal: ""
    },
    teams: [{}, {}, {}]
  },
  updateTeam(team) {
    if (this.debug) console.log(team);
  }
}