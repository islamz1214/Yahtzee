import Game from './Game.js'

export default class Yahtzee extends Game {
  get id () {
    return 'scoreYahtzee'
  }

  setScore (dice) {
    this._score = 0
    if (dice[0] == dice[1] && dice[0] == dice[2] && dice[0] == dice[3] && dice[0] == dice[4]) {
      // TODO - yahtzee bonus logic
      this._score = 50
    }
  }
}
