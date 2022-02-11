import Game from './Game.js'

export default class LargeStraight extends Game {
  get id () {
    return 'scoreFullHouse'
  }

  setScore (dice) {
    this._score = 0
    if (d1 === 1 && d2 === 2 && d3 === 3 && d4 === 4 && d5 === 5 ||
        d1 === 2 && d2 === 3 && d3 === 4 && d4 === 5 && d5 === 6) {
      this._score = 40
    }
  }
}

