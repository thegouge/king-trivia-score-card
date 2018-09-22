export default {
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
      name: "",
      teamNum: "",
      rounds: [{
        number: 1,
        gained: 0
      }, {
        number: 2,
        gained: 0
      }, {
        number: 3,
        gained: 0
      }, {
        number: 4,
        gained: 0
      }, {
        number: 5,
        gained: 0
      }, {
        number: 6,
        gained: 0
      }, {
        number: 7,
        gained: 0
      }],
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
          gained: parseInt(team.rounds[0].gained),
          double: team.rounds[0].double
        },
        {
          number: 2,
          gained: parseInt(team.rounds[1].gained),
          double: team.rounds[1].double
        },
        {
          number: 3,
          gained: parseInt(team.rounds[2].gained),
          double: team.rounds[2].double
        },
        {
          number: 4,
          gained: parseInt(team.rounds[3].gained),
          double: team.rounds[3].double
        },
        {
          number: 5,
          gained: parseInt(team.rounds[4].gained),
          double: team.rounds[4].double
        },
        {
          number: 6,
          gained: parseInt(team.rounds[5].gained),
          double: team.rounds[5].double
        },
        {
          number: 7,
          gained: parseInt(team.rounds[6].gained),
          double: team.rounds[6].double
        }
      ],
      total: team.total
    }
    // console.log(this.state.teams);
    this.updateStandings();
    console.log(this.state.teams);
  },
  updateStandings() {
    this.state.rankedTeams = [...this.state.teams];
    let sorted = this.state.rankedTeams.sort((a, b) => {
      let first = parseInt(a.total);
      let second = parseInt(b.total);
      if (first < second) {
        return 1;
      } else if (second < first) {
        return -1;
      }
      return 0;
    });
    sorted.forEach((orderedTeam, index) => {
      switch (index) {
        case 0:
          orderedTeam.place = "1st";
          break;
        case 1:
          orderedTeam.place = "2nd";
          break;
        case 2:
          orderedTeam.place = "3rd";
          break;
        default:
          orderedTeam.place = `${index + 1}th`;
          break;
      }
    });
    this.state.rankedTeams = sorted;
  },
  gradeRound(round, teamIndex, score) {
    this.state.teams[teamIndex].rounds[round - 1].gained = score;
    this.state.teams[teamIndex].rounds[round - 1].graded = true;
    this.$emit("test");
  }
}
