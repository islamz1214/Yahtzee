import Game from './Game.js'

export default class Ones extends Game {
  get id () {
    return 'scoreOnes'
  }

  setScore (dice) {
    this._score = 0
    for (let i = 0; i < dice.length; i++) {
      if (dice[i] === 1) {
        this._score = this._score + 1
      }
    }
  }
}
