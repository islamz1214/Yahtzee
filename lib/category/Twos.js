import Game from './Game.js'

export default class Twos extends Game {
  get id () {
    return 'scoreTwos'
  }

  setScore (dice) {
    this._score = 0
    for (let i = 0; i < dice.length; i++) {
      if (dice[i] === 2) {
        this._score = this._score + 2
      }
    }
  }
}
