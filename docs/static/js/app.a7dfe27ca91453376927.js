webpackJsonp([1], {
  DGi6: function (t, e) {},
  NHnr: function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var n = a("/5sW"),
      r = {
        name: "MetaNotes",
        data: function () {
          return {}
        },
        computed: {
          today: {
            get: function () {
              return this.$store.state.metaData.date
            },
            set: function (t) {
              this.updateMeta("date", t)
            }
          },
          triviaLocation: {
            get: function () {
              return this.$store.state.metaData.location
            },
            set: function (t) {
              this.updateMeta("location", t)
            }
          },
          arrivalTime: {
            get: function () {
              return this.$store.state.metaData.arrive
            },
            set: function (t) {
              this.updateMeta("arrive", t)
            }
          },
          triviaStart: {
            get: function () {
              return this.$store.state.metaData.start
            },
            set: function (t) {
              this.updateMeta("start", t)
            }
          },
          triviaEnd: {
            get: function () {
              return this.$store.state.metaData.end
            },
            set: function (t) {
              this.updateMeta("end", t)
            }
          },
          numTeams: {
            get: function () {
              return this.$store.getters.numTeams
            },
            set: function (t) {
              this.updateMeta("teams", t)
            }
          },
          numPlayers: {
            get: function () {
              return this.$store.state.metaData.players
            },
            set: function (t) {
              this.updateMeta("players", t)
            }
          },
          mtTables: {
            get: function () {
              return this.$store.state.metaData.empty
            },
            set: function (t) {
              this.updateMeta("empty", t)
            }
          },
          quizRating: {
            get: function () {
              return this.$store.state.metaData.quizRating
            },
            set: function (t) {
              this.updateMeta("quizRating", t)
            }
          },
          otherNotes: {
            get: function () {
              return this.$store.state.metaData.internal
            },
            set: function (t) {
              this.updateMeta("internal", t)
            }
          }
        },
        props: {},
        methods: {
          select: function (t) {
            document.getElementById(t).select()
          },
          updateMeta: function (t, e) {
            this.$store.commit("updateMeta", {
              noteToUpdate: t,
              value: e
            })
          }
        }
      },
      i = {
        render: function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("form", {
            attrs: {
              id: "top-notes"
            },
            on: {
              submit: function (e) {
                return e.preventDefault(), t.onSubmit(e)
              }
            }
          }, [a("p", {
            staticClass: "in-field",
            attrs: {
              id: "in-date"
            }
          }, [a("label", {
            attrs: {
              for: "date"
            }
          }, [t._v("Date:")]), t._v(" "), a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.today,
              expression: "today"
            }],
            attrs: {
              type: "date",
              id: "date"
            },
            domProps: {
              value: t.today
            },
            on: {
              click: function (e) {
                t.select("date")
              },
              input: function (e) {
                e.target.composing || (t.today = e.target.value)
              }
            }
          })]), t._v(" "), a("p", {
            staticClass: "in-field",
            attrs: {
              id: "in-loc"
            }
          }, [a("label", {
            attrs: {
              for: "location"
            }
          }, [t._v("Location:")]), t._v(" "), a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.triviaLocation,
              expression: "triviaLocation"
            }],
            attrs: {
              type: "text",
              id: "location"
            },
            domProps: {
              value: t.triviaLocation
            },
            on: {
              click: function (e) {
                t.select("location")
              },
              input: function (e) {
                e.target.composing || (t.triviaLocation = e.target.value)
              }
            }
          })]), t._v(" "), a("p", {
            staticClass: "in-field",
            attrs: {
              id: "in-arr"
            }
          }, [a("label", {
            attrs: {
              for: "arrive"
            }
          }, [t._v("Arrival Time")]), t._v(" "), a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.arrivalTime,
              expression: "arrivalTime"
            }],
            attrs: {
              type: "time",
              id: "arrive"
            },
            domProps: {
              value: t.arrivalTime
            },
            on: {
              click: function (e) {
                t.select("arrive")
              },
              input: function (e) {
                e.target.composing || (t.arrivalTime = e.target.value)
              }
            }
          })]), t._v(" "), a("p", {
            staticClass: "in-field",
            attrs: {
              id: "in-start"
            }
          }, [a("label", {
            attrs: {
              for: "start"
            }
          }, [t._v("Start Time")]), t._v(" "), a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.triviaStart,
              expression: "triviaStart"
            }],
            attrs: {
              type: "time",
              id: "start"
            },
            domProps: {
              value: t.triviaStart
            },
            on: {
              click: function (e) {
                t.select("start")
              },
              input: function (e) {
                e.target.composing || (t.triviaStart = e.target.value)
              }
            }
          })]), t._v(" "), a("p", {
            staticClass: "in-field",
            attrs: {
              id: "in-end"
            }
          }, [a("label", {
            attrs: {
              for: "end"
            }
          }, [t._v("Ending Time")]), t._v(" "), a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.triviaEnd,
              expression: "triviaEnd"
            }],
            attrs: {
              type: "time",
              id: "end"
            },
            domProps: {
              value: t.triviaEnd
            },
            on: {
              click: function (e) {
                t.select("end")
              },
              input: function (e) {
                e.target.composing || (t.triviaEnd = e.target.value)
              }
            }
          })]), t._v(" "), a("p", {
            staticClass: "in-field",
            attrs: {
              id: "in-teams"
            }
          }, [a("label", {
            attrs: {
              for: "teams"
            }
          }, [t._v("# of Teams")]), t._v(" "), a("input", {
            attrs: {
              type: "number",
              id: "num-teams"
            },
            domProps: {
              value: t.numTeams
            },
            on: {
              click: function (e) {
                t.select("num-teams")
              }
            }
          })]), t._v(" "), a("p", {
            staticClass: "in-field",
            attrs: {
              id: "in-play"
            }
          }, [a("label", {
            attrs: {
              for: "players"
            }
          }, [t._v("# of Players")]), t._v(" "), a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.numPlayers,
              expression: "numPlayers"
            }],
            attrs: {
              type: "number",
              id: "players"
            },
            domProps: {
              value: t.numPlayers
            },
            on: {
              click: function (e) {
                t.select("players")
              },
              input: function (e) {
                e.target.composing || (t.numPlayers = e.target.value)
              }
            }
          })]), t._v(" "), a("p", {
            staticClass: "in-field",
            attrs: {
              id: "in-emp"
            }
          }, [a("label", {
            attrs: {
              for: "empty"
            }
          }, [t._v("Empty Tables")]), t._v(" "), a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.mtTables,
              expression: "mtTables"
            }],
            attrs: {
              type: "number",
              id: "empty"
            },
            domProps: {
              value: t.mtTables
            },
            on: {
              click: function (e) {
                t.select("empty")
              },
              input: function (e) {
                e.target.composing || (t.mtTables = e.target.value)
              }
            }
          })]), t._v(" "), a("p", {
            staticClass: "in-field",
            attrs: {
              id: "in-rate"
            }
          }, [a("label", {
            attrs: {
              for: "rating"
            }
          }, [t._v("Rate the Questions!")]), t._v(" "), a("select", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.quizRating,
              expression: "quizRating"
            }],
            attrs: {
              id: "rating"
            },
            on: {
              change: function (e) {
                var a = Array.prototype.filter.call(e.target.options, function (t) {
                  return t.selected
                }).map(function (t) {
                  return "_value" in t ? t._value : t.value
                });
                t.quizRating = e.target.multiple ? a : a[0]
              }
            }
          }, [a("option", {
            attrs: {
              value: "5"
            }
          }, [t._v("5 -- Awesome!")]), t._v(" "), a("option", {
            attrs: {
              value: "4"
            }
          }, [t._v("4")]), t._v(" "), a("option", {
            attrs: {
              value: "3"
            }
          }, [t._v("3")]), t._v(" "), a("option", {
            attrs: {
              value: "2"
            }
          }, [t._v("2")]), t._v(" "), a("option", {
            attrs: {
              value: "1"
            }
          }, [t._v("1 -- Lousy!")])])]), t._v(" "), a("p", {
            staticClass: "in-field",
            attrs: {
              id: "in-notes"
            }
          }, [a("label", {
            attrs: {
              for: "notes"
            }
          }, [t._v("Notes")]), t._v(" "), a("textarea", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.otherNotes,
              expression: "otherNotes"
            }],
            attrs: {
              id: "internal"
            },
            domProps: {
              value: t.otherNotes
            },
            on: {
              click: function (e) {
                t.select("notes")
              },
              input: function (e) {
                e.target.composing || (t.otherNotes = e.target.value)
              }
            }
          })])])
        },
        staticRenderFns: []
      };
    var s = a("VU/8")(r, i, !1, function (t) {
        a("VbeM")
      }, "data-v-49425829", null).exports,
      o = {
        name: "Team",
        data: function () {
          return {}
        },
        computed: {
          teamNum: {
            get: function () {
              return this.$store.state.teams[this.index].teamNum
            },
            set: function (t) {
              this.$store.commit("updateNum", {
                value: t,
                index: this.index
              })
            }
          },
          teamName: {
            get: function () {
              return this.$store.state.teams[this.index].teamName
            },
            set: function (t) {
              this.$store.commit("updateName", {
                value: t,
                index: this.index
              })
            }
          },
          rounds: function () {
            return this.$store.state.teams[this.index].rounds
          },
          total: function () {
            return this.rounds.reduce(function (t, e) {
              return t + e.gained
            }, 0)
          }
        },
        props: {
          index: {
            type: Number,
            required: !0
          }
        },
        methods: {
          getRoundTotal: function (t) {
            for (var e = 0, a = 0; a < t + 1; a++) e += parseInt(this.rounds[a].gained);
            return e
          },
          updateRound: function (t) {
            var e = parseInt(t.target.value),
              a = parseInt(t.target.id.slice(-1));
            this.$store.commit("updateRounds", {
              round: a,
              score: e,
              index: this.index
            })
          },
          select: function (t) {
            var e = void 0;
            e = "score" === t ? "score-" + this.index + "-" + arguments[1] : t + "-" + this.index, document.getElementById(e).select()
          }
        }
      },
      u = {
        render: function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("tr", {
            staticClass: "team-line"
          }, [a("td", {
            staticClass: "team-box"
          }, [t._v(t._s(t.index + 1) + ". "), a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.teamNum,
              expression: "teamNum"
            }],
            staticClass: "team-num",
            attrs: {
              type: "number",
              id: "team-num-" + t.index,
              min: "10000",
              max: "99999"
            },
            domProps: {
              value: t.teamNum
            },
            on: {
              click: function (e) {
                t.select("team-num")
              },
              input: function (e) {
                e.target.composing || (t.teamNum = e.target.value)
              }
            }
          })]), t._v(" "), a("td", {
            staticClass: "name"
          }, [a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.teamName,
              expression: "teamName"
            }],
            staticClass: "team-name",
            attrs: {
              type: "text",
              id: "team-name-" + t.index,
              tabindex: "1"
            },
            domProps: {
              value: t.teamName
            },
            on: {
              click: function (e) {
                t.select("team-name")
              },
              input: function (e) {
                e.target.composing || (t.teamName = e.target.value)
              }
            }
          })]), t._v(" "), t._l(t.rounds, function (e, n) {
            return a("td", {
              key: n,
              staticClass: "round-score"
            }, [a("input", {
              staticClass: "score",
              attrs: {
                type: "number",
                id: "score-" + t.index + "-" + parseInt(n + 1),
                min: "-1",
                max: "25",
                tabindex: n + 2
              },
              domProps: {
                value: t.rounds[n].gained
              },
              on: {
                change: t.updateRound,
                click: function (e) {
                  t.select("score", n + 1)
                }
              }
            }), t._v(" "), n > 0 ? a("span", {
              staticClass: "total"
            }, [t._v(t._s(0 === t.rounds[n].gained ? 0 : t.getRoundTotal(n)))]) : t._e()])
          }), t._v(" "), a("td", {
            staticClass: "team-total"
          }, [t._v(t._s(t.total))])], 2)
        },
        staticRenderFns: []
      };
    var l = {
        name: "scoreBoard",
        components: {
          MetaNotes: s,
          Team: a("VU/8")(o, u, !1, function (t) {
            a("pwpZ")
          }, null, null).exports
        },
        computed: {
          teamsArray: function () {
            return this.$store.state.teams
          }
        },
        props: {
          rounds: {
            type: Array,
            required: !0
          }
        },
        methods: {
          addTeam: function () {
            this.$store.commit("pushTeam")
          },
          exportFile: function () {
            var t = this.convertToCSV();
            if (null != t) {
              var e = this.$store.state.metaData.date + "-trivia-spreadsheet.csv";
              t.match(/^data:text\/csv/i) || (t = "data:text/csv;charset=utf-8," + t);
              var a = encodeURI(t),
                n = document.createElement("a");
              n.setAttribute("href", a), n.setAttribute("download", e), n.click()
            }
          },
          convertToCSV: function () {
            var t = this.$store.state.metaData,
              e = this.$store.getters.rankedTeams,
              a = "Team Number:,Name:,Round 1,Round 2,Round 3,Round 4,Round 5,Round 6,Round 7, Total\n";
            return "King Trivia Score Sheet!\nDate:,Location:,ArrivalTime:,Show Start:,Show End:,Teams:,Players:,Empty Tables:,Question Rating:,Int. Notes:\n" + t.date + "," + t.location + "," + t.arrive + "," + t.start + "," + t.end + "," + e.length + "," + t.players + "," + t.empty + "," + t.quizRating + "," + t.internal + "\n" + (a += e.map(function (t) {
              return t.teamNum + "," + t.teamName + "," + t.rounds[0].gained + "," + t.rounds[1].gained + "," + t.rounds[2].gained + "," + t.rounds[3].gained + "," + t.rounds[4].gained + "," + t.rounds[5].gained + "," + t.rounds[6].gained + "," + t.total
            }).join("\n"))
          },
          resetTheState: function () {
            this.$store.commit("resetAutoSave")
          }
        }
      },
      m = {
        render: function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", {
            attrs: {
              id: "board"
            }
          }, [a("MetaNotes"), t._v(" "), a("div", {
            attrs: {
              id: "toolbar"
            }
          }, [a("button", {
            on: {
              click: t.addTeam
            }
          }, [t._v("Add Team")]), t._v(" "), a("button", {
            on: {
              click: t.resetTheState
            }
          }, [t._v("Reset")]), t._v(" "), a("button", {
            on: {
              click: t.exportFile
            }
          }, [t._v("Export")])]), t._v(" "), a("table", {
            attrs: {
              id: "scores"
            }
          }, [a("tr", {
            attrs: {
              id: "top-bar"
            }
          }, [a("th", {
            attrs: {
              id: "num-title"
            }
          }, [t._v("Team#")]), t._v(" "), a("th", {
            attrs: {
              id: "name-title"
            }
          }, [t._v("Team Name")]), t._v(" "), t._l(t.rounds, function (e, n) {
            return a("th", {
              key: n,
              staticClass: "round-num"
            }, [t._v("Round " + t._s(e.number))])
          }), t._v(" "), a("th", {
            staticClass: "round-num",
            attrs: {
              id: "total-title"
            }
          }, [t._v("Total")])], 2), t._v(" "), t._l(t.teamsArray, function (t, e) {
            return a("team", {
              key: e,
              attrs: {
                index: e
              }
            })
          })], 2)], 1)
        },
        staticRenderFns: []
      };
    var d = a("VU/8")(l, m, !1, function (t) {
        a("lR57")
      }, null, null).exports,
      c = a("pFYg"),
      v = a.n(c),
      p = {
        name: "CurrRound",
        data: function () {
          return {
            current: 1,
            teamName: null,
            teamNum: null,
            teamRight: null,
            double: !1,
            personPoints: null,
            sevenTotal: null,
            penPoints: !1
          }
        },
        computed: {
          teamArray: function () {
            return this.$store.state.teams
          },
          currentRound: function () {
            return this.rounds[this.current - 1]
          },
          graded: function () {
            var t = this;
            return this.$store.state.teams.filter(function (e) {
              return e.rounds[t.current - 1].graded
            })
          }
        },
        props: {
          rounds: {
            type: Array,
            required: !0
          }
        },
        methods: {
          reset: function () {
            this.teamNum = null, this.teamRight = null, this.double = !1, this.personPoints = null, this.penPoints = !1
          },
          nextRound: function () {
            this.current++, this.reset(), this.sevenTotal = null
          },
          previousRound: function () {
            this.current--, this.reset(), this.sevenTotal = null
          },
          scoreRound: function () {
            var t = this.teamArray.map(function (t) {
              return t.teamName
            }).indexOf(this.teamName);
            if (t < 0) alert('"' + this.teamName + '" is not a team!');
            else {
              var e = this.current < 7 ? this.rounds[this.current - 1].questions : this.sevenTotal,
                a = parseInt(this.teamRight);
              console.log(void 0 === a ? "undefined" : v()(a)), 4 === this.current && (a = parseInt(this.personPoints)), this.double && (a = e > this.teamRight ? 0 : 2 * e), this.current < 4 && parseInt(this.teamNum) > 0 && !this.teamArray[t].teamNum && (a = parseInt(a) + 2, this.$store.commit("updateNum", {
                index: t,
                value: this.teamNum
              })), 7 === this.current && this.penPoints && (a += 2), this.$store.commit("updateRounds", {
                index: t,
                round: this.current,
                score: a
              }), this.reset(), this.teamName = null
            }
          }
        }
      },
      f = {
        render: function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", {
            attrs: {
              id: "curr-round"
            }
          }, [a("div", {
            attrs: {
              id: "round-title"
            }
          }, [t.current > 1 ? a("button", {
            staticClass: "round-header round-button",
            on: {
              click: t.previousRound
            }
          }, [t._v(" ← ")]) : a("div", {
            staticClass: "button-sub"
          }), t._v(" "), a("h2", {
            staticClass: "round-header"
          }, [t._v("Round " + t._s(t.current))]), t._v(" "), t.current < 7 ? a("button", {
            staticClass: "round-header round-button",
            on: {
              click: t.nextRound
            }
          }, [t._v(" → ")]) : a("div", {
            staticClass: "button-sub"
          })]), t._v(" "), t.graded.length === t.teamArray.length ? a("h3", {
            staticClass: "done-grading"
          }, [t._v("- All teams have been graded! -")]) : t._e(), t._v(" "), a("form", {
            attrs: {
              id: "round-form"
            },
            on: {
              submit: function (t) {
                t.preventDefault()
              }
            }
          }, [a("label", {
            attrs: {
              for: "curr-team"
            }
          }, [t._v("Choose a team to grade")]), t._v(" "), a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.teamName,
              expression: "teamName"
            }],
            attrs: {
              list: "curr-team-list",
              id: "curr-team",
              name: "curr-team",
              autocomplete: "off"
            },
            domProps: {
              value: t.teamName
            },
            on: {
              change: t.reset,
              input: function (e) {
                e.target.composing || (t.teamName = e.target.value)
              }
            }
          }), t._v(" "), a("datalist", {
            attrs: {
              id: "curr-team-list"
            }
          }, t._l(t.teamArray, function (t, e) {
            return a("option", {
              key: e,
              domProps: {
                value: t.teamName
              }
            })
          })), t._v(" "), 7 === t.current ? a("div", [a("label", {
            attrs: {
              for: "sevTotal"
            }
          }, [t._v("How many questions are there in this round?")]), t._v(" "), a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.sevenTotal,
              expression: "sevenTotal"
            }],
            attrs: {
              type: "number",
              id: "sevTotal",
              max: "10"
            },
            domProps: {
              value: t.sevenTotal
            },
            on: {
              input: function (e) {
                e.target.composing || (t.sevenTotal = e.target.value)
              }
            }
          }), t._v(" "), a("label", {
            attrs: {
              for: "pen"
            }
          }, [t._v("Did they turn in their pen?")]), t._v(" "), a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.penPoints,
              expression: "penPoints"
            }],
            attrs: {
              type: "checkbox",
              name: "pen"
            },
            domProps: {
              checked: Array.isArray(t.penPoints) ? t._i(t.penPoints, null) > -1 : t.penPoints
            },
            on: {
              change: function (e) {
                var a = t.penPoints,
                  n = e.target,
                  r = !!n.checked;
                if (Array.isArray(a)) {
                  var i = t._i(a, null);
                  n.checked ? i < 0 && (t.penPoints = a.concat([null])) : i > -1 && (t.penPoints = a.slice(0, i).concat(a.slice(i + 1)))
                } else t.penPoints = r
              }
            }
          })]) : t._e(), t._v(" "), a("br"), t._v(" "), 4 != t.current ? a("div", [a("label", {
            attrs: {
              for: "num-right"
            }
          }, [t._v("Number of questions correct:")]), t._v(" "), a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.teamRight,
              expression: "teamRight"
            }],
            attrs: {
              type: "number",
              id: "num-right",
              min: "0",
              max: t.currentRound.questions
            },
            domProps: {
              value: t.teamRight
            },
            on: {
              input: function (e) {
                e.target.composing || (t.teamRight = e.target.value)
              }
            }
          }), t._v(" "), a("br"), t._v(" "), a("label", {
            attrs: {
              for: "double"
            }
          }, [t._v("Double Down?")]), t._v(" "), a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.double,
              expression: "double"
            }],
            attrs: {
              type: "checkbox"
            },
            domProps: {
              checked: Array.isArray(t.double) ? t._i(t.double, null) > -1 : t.double
            },
            on: {
              change: function (e) {
                var a = t.double,
                  n = e.target,
                  r = !!n.checked;
                if (Array.isArray(a)) {
                  var i = t._i(a, null);
                  n.checked ? i < 0 && (t.double = a.concat([null])) : i > -1 && (t.double = a.slice(0, i).concat(a.slice(i + 1)))
                } else t.double = r
              }
            }
          }), t._v(" "), t.current <= 3 ? a("div", [a("label", {
            attrs: {
              for: "registered"
            }
          }, [t._v("What's their team number?")]), t._v(" "), a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.teamNum,
              expression: "teamNum"
            }],
            attrs: {
              type: "number",
              name: "registered",
              max: "99999"
            },
            domProps: {
              value: t.teamNum
            },
            on: {
              input: function (e) {
                e.target.composing || (t.teamNum = e.target.value)
              }
            }
          })]) : t._e()]) : t._e(), t._v(" "), 4 === t.current ? a("div", [a("label", {
            attrs: {
              for: "person-points"
            }
          }, [t._v("How many points did they get?")]), t._v(" "), a("select", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.personPoints,
              expression: "personPoints"
            }],
            attrs: {
              id: "person-points"
            },
            on: {
              change: function (e) {
                var a = Array.prototype.filter.call(e.target.options, function (t) {
                  return t.selected
                }).map(function (t) {
                  return "_value" in t ? t._value : t.value
                });
                t.personPoints = e.target.multiple ? a : a[0]
              }
            }
          }, [a("option", {
            attrs: {
              value: "10"
            }
          }, [t._v("10pts")]), t._v(" "), a("option", {
            attrs: {
              value: "8"
            }
          }, [t._v("8pts")]), t._v(" "), a("option", {
            attrs: {
              value: "6"
            }
          }, [t._v("6pts")]), t._v(" "), a("option", {
            attrs: {
              value: "4"
            }
          }, [t._v("4pts")]), t._v(" "), a("option", {
            attrs: {
              value: "2"
            }
          }, [t._v("2pts")]), t._v(" "), a("option", {
            attrs: {
              value: "0",
              selected: ""
            }
          }, [t._v("0pts")]), t._v(" "), a("option", {
            attrs: {
              value: "-1"
            }
          }, [t._v("-1pts")])])]) : t._e(), t._v(" "), a("br"), t._v(" "), a("button", {
            staticClass: "submit",
            on: {
              click: t.scoreRound
            }
          }, [t._v("Submit")])]), t._v(" "), a("div", {
            staticClass: "graded-list"
          }, [a("ul", t._l(t.graded, function (e, n) {
            return a("li", {
              key: n
            }, [t._v(t._s(e.teamName) + " has been graded!")])
          }))])])
        },
        staticRenderFns: []
      };
    var h = {
      render: function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", {
          attrs: {
            id: "rank-box"
          }
        }, [a("h2", {
          attrs: {
            id: "ranking-title"
          }
        }, [t._v("Team Rankings")]), t._v(" "), a("ul", t._l(t.rankedTeams, function (e, n) {
          return a("li", {
            key: n
          }, [t._v("\n        in " + t._s(t.rankTeam(e)) + ' place: "' + t._s(e.teamName) + '" with ' + t._s(e.total) + " points!\n      ")])
        }))])
      },
      staticRenderFns: []
    };
    var _ = {
        name: "Timer",
        data: function () {
          return {
            timerId: null,
            secondsLeft: 0,
            minutesLeft: 0,
            timeLeft: 0
          }
        },
        computed: {},
        methods: {
          startTimer: function () {
            var t = this;
            this.timeLeft = 60 * parseInt(this.minutesLeft) + parseInt(this.secondsLeft), this.timerId = setInterval(function () {
              0 === t.timeLeft ? (alert("Time's up!"), clearInterval(t.timerId), t.timerId = null) : t.timeLeft--
            }, 1e3)
          },
          notate: function (t) {
            for (var e = 0; t > 60;) t -= 60, e++;
            for (; e > 60;) e -= 60, 0;
            return e + " minutes " + t + " seconds"
          }
        }
      },
      g = {
        render: function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [t.timerId ? a("div", [a("h2", [t._v("Time Remaining")]), t._v(" "), a("h3", [t._v(t._s(t.notate(t.timeLeft)) + " remaining in timer")])]) : a("div", [a("h2", [t._v("Set your timer!")]), t._v(" "), a("label", {
            attrs: {
              for: "minutes"
            }
          }, [t._v("Minutes")]), t._v(" "), a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.minutesLeft,
              expression: "minutesLeft"
            }],
            attrs: {
              type: "number",
              id: "minutes"
            },
            domProps: {
              value: t.minutesLeft
            },
            on: {
              input: function (e) {
                e.target.composing || (t.minutesLeft = e.target.value)
              }
            }
          }), t._v(" "), a("label", {
            attrs: {
              for: "seconds"
            }
          }, [t._v("Seconds")]), t._v(" "), a("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.secondsLeft,
              expression: "secondsLeft"
            }],
            attrs: {
              type: "number",
              id: "seconds"
            },
            domProps: {
              value: t.secondsLeft
            },
            on: {
              input: function (e) {
                e.target.composing || (t.secondsLeft = e.target.value)
              }
            }
          }), t._v(" "), a("button", {
            on: {
              click: t.startTimer
            }
          }, [t._v("Start!")])])])
        },
        staticRenderFns: []
      };
    var b = {
        name: "CoinFlip",
        data: function () {
          return {
            heads: null,
            flipping: !1
          }
        },
        methods: {
          flipCoin: function () {
            var t = this;
            this.flipping = !0, setTimeout(function () {
              Math.random() >= .5 ? t.heads = !0 : t.heads = !1, t.flipping = !1
            }, 500)
          }
        }
      },
      T = {
        render: function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", {
            attrs: {
              id: "coin-flip"
            }
          }, [n("button", {
            on: {
              click: t.flipCoin
            }
          }, [t._v("Flip Coin")]), t._v(" "), n("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: t.flipping,
              expression: "flipping"
            }],
            attrs: {
              id: "flip-window"
            }
          }, [n("h3", [t._v("Flipping...")])]), t._v(" "), t.heads ? n("div", [n("h2", [t._v("Heads!")]), t._v(" "), n("img", {
            attrs: {
              src: a("vJan"),
              alt: "quarter heads"
            }
          })]) : !1 === t.heads ? n("div", [n("h2", [t._v("Tails!")]), t._v(" "), n("img", {
            attrs: {
              src: a("VfyS"),
              alt: "quarter tails"
            }
          })]) : t._e()])
        },
        staticRenderFns: []
      };
    var y = {
        name: "App",
        components: {
          ScoreBoard: d,
          CurrRound: a("VU/8")(p, f, !1, function (t) {
            a("mw68")
          }, "data-v-3003cd44", null).exports,
          Standings: a("VU/8")({
            computed: {
              teams: function () {
                return this.$store.state.teams.map(function (t) {
                  return {
                    teamName: t.teamName,
                    total: t.total
                  }
                })
              },
              rankedTeams: function () {
                return this.$store.getters.rankedTeams
              }
            },
            methods: {
              rankTeam: function (t) {
                var e = this.rankedTeams.indexOf(t) + 1,
                  a = e.toString().slice(-1);
                if (11 === e || 12 === e || 13 === e) return e + "th";
                switch (a) {
                  case "1":
                    return e + "st";
                  case "2":
                    return e + "nd";
                  case "3":
                    return e + "rd";
                  default:
                    return e + "th"
                }
              }
            }
          }, h, !1, function (t) {
            a("iBV8")
          }, "data-v-7fe6da92", null).exports,
          Timer: a("VU/8")(_, g, !1, function (t) {
            a("sIo8")
          }, null, null).exports,
          CoinFlip: a("VU/8")(b, T, !1, function (t) {
            a("ilsR")
          }, null, null).exports
        },
        data: function () {
          return {
            tabs: ["Score Board", "Current Round", "Standings", "Timer", "Coin Flip"],
            selectedTab: "Score Board",
            rounds: [{
              number: 1,
              questions: 6
            }, {
              number: 2,
              questions: 8
            }, {
              number: 3,
              questions: 6
            }, {
              number: 4
            }, {
              number: 5,
              questions: 10
            }, {
              number: 6,
              questions: 10
            }, {
              number: 7,
              questions: 10
            }]
          }
        },
        mounted: function () {
          this.$store.commit("loadFromLocal", "_autoSave")
        }
      },
      N = {
        render: function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", {
            attrs: {
              id: "app"
            }
          }, [a("h1", [t._v("King Trivia Score Card")]), t._v(" "), a("ul", {
            attrs: {
              id: "tab-bar"
            }
          }, t._l(t.tabs, function (e, n) {
            return a("li", {
              key: n,
              staticClass: "tab",
              class: {
                activeTab: t.selectedTab === e
              },
              on: {
                click: function (a) {
                  t.selectedTab = e
                }
              }
            }, [t._v("\n        " + t._s(e) + "\n      ")])
          })), t._v(" "), a("br"), t._v(" "), a("main", [a("ScoreBoard", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: "Score Board" === t.selectedTab,
              expression: 'selectedTab === "Score Board"'
            }],
            attrs: {
              rounds: t.rounds
            }
          }), t._v(" "), a("CurrRound", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: "Current Round" === t.selectedTab,
              expression: 'selectedTab === "Current Round"'
            }],
            attrs: {
              rounds: t.rounds
            }
          }), t._v(" "), a("Standings", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: "Standings" === t.selectedTab,
              expression: 'selectedTab === "Standings"'
            }]
          }), t._v(" "), a("Timer", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: "Timer" === t.selectedTab,
              expression: 'selectedTab === "Timer"'
            }]
          }), t._v(" "), a("CoinFlip", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: "Coin Flip" === t.selectedTab,
              expression: 'selectedTab === "Coin Flip"'
            }]
          })], 1)])
        },
        staticRenderFns: []
      };
    var x = a("VU/8")(y, N, !1, function (t) {
        a("DGi6")
      }, null, null).exports,
      R = a("mvHQ"),
      w = a.n(R),
      S = a("NYxO"),
      k = a("M4fF"),
      C = a.n(k);
    n.a.use(S.a);
    var P = new Date,
      $ = new S.a.Store({
        strict: !0,
        state: {
          metaData: {
            date: P.getFullYear() + "-" + ("0" + (P.getMonth() + 1)).slice(-2) + "-" + ("0" + P.getDate()).slice(-2),
            location: "",
            arrive: "",
            start: "",
            end: "",
            teams: "",
            players: "",
            empty: "",
            quizRating: "",
            internal: ""
          },
          teams: [],
          timer: 0
        },
        getters: {
          rankedTeams: function (t) {
            return C.a.sortBy(t.teams, function (t) {
              return t.total
            }).reverse()
          },
          numTeams: function (t) {
            return t.teams.length
          }
        },
        mutations: {
          pushTeam: function (t) {
            t.teams.push({
              teamName: "",
              teamNum: "00000",
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
            }), this.commit("saveToLocal", "_autoSave")
          },
          updateName: function (t, e) {
            t.teams[e.index].teamName = e.value, this.commit("saveToLocal", "_autoSave")
          },
          updateNum: function (t, e) {
            t.teams[e.index].teamNum = e.value, this.commit("saveToLocal", "_autoSave")
          },
          updateRounds: function (t, e) {
            t.teams[e.index].rounds[e.round - 1].gained = e.score, n.a.set(t.teams[e.index].rounds[e.round - 1], "graded", !0);
            var a = t.teams[e.index].rounds.reduce(function (t, a) {
              return a.number === e.round ? t + e.score : t + a.gained
            }, 0);
            t.teams[e.index].total = a, this.commit("saveToLocal", "_autoSave")
          },
          updateMeta: function (t, e) {
            t.metaData[e.noteToUpdate] = e.value
          },
          loadFromLocal: function (t, e) {
            var a = JSON.parse(localStorage.getItem(e));
            a && $.replaceState(a)
          },
          saveToLocal: function (t, e) {
            localStorage.setItem(e, w()(t))
          },
          resetAutoSave: function (t) {
            localStorage.removeItem("_autoSave"), $.replaceState({
              metaData: {
                date: P.getFullYear() + "-" + ("0" + (P.getMonth() + 1)).slice(-2) + "-" + ("0" + P.getDate()).slice(-2),
                location: "",
                arrive: "",
                start: "",
                end: "",
                teams: "",
                players: "",
                empty: "",
                quizRating: "",
                internal: ""
              },
              teams: [],
              timer: 0
            })
          }
        }
      });
    n.a.config.productionTip = !1, new n.a({
      store: $,
      el: "#app",
      render: function (t) {
        return t(x)
      }
    })
  },
  VbeM: function (t, e) {},
  VfyS: function (t, e, a) {
    t.exports = a.p + "static/img/tails.6dd207e.png"
  },
  iBV8: function (t, e) {},
  ilsR: function (t, e) {},
  lR57: function (t, e) {},
  mw68: function (t, e) {},
  pwpZ: function (t, e) {},
  sIo8: function (t, e) {},
  vJan: function (t, e, a) {
    t.exports = a.p + "static/img/heads.b07cd20.png"
  }
}, ["NHnr"]);
//# sourceMappingURL=app.a7dfe27ca91453376927.js.map
