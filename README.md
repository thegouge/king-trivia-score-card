# King Trivia Score Board

## A single-page web app for quizmasters to use during a King Trivia Game!

### This is for King Trivia Quizmasters to use during king trivia games. If you are currently playing a king trivia game, and you're reading this. Shame on you! First rule is no phones! Put that away!

---

## Update Notes

Now works WAY better on Mobile! Grade on with your phones good quizmasters!

---

## Usage

for the time being, you must go to [this website](https://thegouge.github.io/king-trivia-score-card/) in order to use this score card. I'll be in talks with King Trivia to integrate it into their site for you. So look for that in the future!

...maybe...

In the meantime, let's go over the tabs within the app

### Score Board

when you first boot up the page, you'll be on the **Score Board** tab. This tab is basically a digital version of the typical King Trivia Score Sheet that Comes with your questions packet, as well as a few buttons that do stuff!

The **Add Team** button adds a team line to the score board. Much like on the usual score card, the team line added has spaces for team numbers, names, and scores for each round. But unlike the pen-and-paper version, the app keeps a running total as you score, as well as breakdowns for each round (if you use the **Current Round** tab, more on that later). So it does half the work for you! Gotta Love Technology!

The Little "X" next to the team number deletes that team from the entire Application so **BE VERY CAREFUL USING THIS BUTTON**

The **Reset** button does exactly what it says on the tin, it resets your score card. Nothing else to say here.

The **Download** button downloads the score board as a CSV file, which you can open in Excel! This button allows you to keep a record of your past games.

when/if this app gets integrated with KT's website proper, there will be a button here to submit the score card to King Trivia as the data for your recap

---

### Current Round

Here is where I spend most of my time during a game (and I'd suggest you do too). This is the tab that makes grading teams a quick and, hopefully, painless process.

Most of this page is pretty self-explanatory, you type the team name into the prompt, then fill in the rest of the form.

What's awesome is on the round 1 page, you score each new team and the score board (as well as future rounds on the current round tab) will be populated with those new teams! Pretty Awesome Right?

---

### Standings

this tab just lists each team in order of total score. This tab is for updating your teams about their standings.

Pretty self-explanatory

---

### Timer

This tab is a basic timer to help with timekeeping. If you say "the round will be over in one minute!" you can punch 1 minute into this timer, and when that minute is up, a little alert window will pop up (regardless of where you are in the app) letting you know!

---

### Coin Flip

I am lazy as f\*\*\* and if I can't think of anything clever for my drinking round, I literally leave it up to a series of calling coin flips. And this tab is a straight up and down 50/50 coin flip app

---

### Quick note about local storage

If you're happily quizmastering away, and you absolutely close the tab or refresh, **fear not!** For this app is more robust than your average app! It saves your scoreboard data to your browser. You'd have to change computers or press the reset button to accidentally erase everything

---

## Contact

If you would like to offer opinions/suggestions, hit me up at

thegougedev@gmail.com

or post issues by clicking the "new issue" button on [GitHub](https://github.com/thegouge/king-trivia-score-card/issues)

---

## For Developers

### Build Details

This is built in Vue.js with Typescript, so keep that in mind if you'd like to change stuff. Also, this is my first actual project I've ever built in Vue. Please don't point and laugh _too hard_ at my terrible code

...please?...

### Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
