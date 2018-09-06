const store = {
  debug: true,
  state: {
    metaData: {
      date: "",
      location: "",
      arrive: "",
      start: "",
      teamNum: "",
      players: "",
      empty: "",
      internal: ""
    },
    teams: [{
        total: 0
      },
      {
        total: 0
      },
      {
        total: 0
      }
    ]
  },
  addTeam() {
    this.state.teams.push({
      total: 0
    });
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
  updateMeta(note, value) {
    if (this.debug) console.log(`Updating '${note}' in the store!`);

    this.state[note] = value;
  }
}