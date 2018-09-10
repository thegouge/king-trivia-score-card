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
    teams: [],
    rankedTeams: []
  },
  addTeam() {
    this.state.teams.push({
      total: 0
    });
  },
  updateMeta(note, value) {
    if (this.debug) console.log(`Updating '${note}' in the store!`);

    this.state[note] = value;
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
    this.updateStandings();
    console.log(this.state.rankedTeams);
  },
  updateStandings() {
    let sorted = this.state.teams.sort((a, b) => {
      let first = parseInt(a.total);
      let second = parseInt(b.total);
      if (first < second) {
        return 1;
      } else if (second < first) {
        return -1;
      }
      return 0;
    });
    sorted.forEach((team, index) => {
      switch (index) {
        case 0:
          team.place = "1st";
          break;
        case 1:
          team.place = "2nd";
          break;
        case 2:
          team.place = "3rd";
          break;
        default:
          team.place = `${index + 1}th`;
          break;
      }
    });
    this.state.rankedTeams = sorted;
  }
}