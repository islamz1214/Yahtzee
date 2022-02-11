import Game from './Game.js'

export default class Threes extends Game {
  get id () {
    return 'scoreThrees'
  }

  setScore (dice) {
    this._score = 0
    for (let i = 0; i < dice.length; i++) {
      if (dice[i] === 3) {
        this._score = this._score + 3
      }
    }
  }
}
