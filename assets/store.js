const store = {
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
    teams: []
  },
  updateTeam(team, i) {
    if (this.debug) console.log(`updating ${team.name} in the store!`);
    this.state.teams[i] = {
      name: team.name,
      teamNum: team.teamNum,
      rounds: [{
          number: 1,
          gained: parseInt(team.rounds[0].gained)
        },
        {
          number: 2,
          gained: parseInt(team.rounds[1].gained)
        },
        {
          number: 3,
          gained: parseInt(team.rounds[2].gained)
        },
        {
          number: 4,
          gained: parseInt(team.rounds[3].gained)
        },
        {
          number: 5,
          gained: parseInt(team.rounds[4].gained)
        },
        {
          number: 6,
          gained: parseInt(team.rounds[5].gained)
        },
        {
          number: 7,
          gained: parseInt(team.rounds[6].gained)
        }
      ],
      total: team.total
    }
    if (this.debug) console.log(this.state.teams[i]);
  },
  updateMeta(notes) {
    if (this.debug) console.log(notes);
  }
}