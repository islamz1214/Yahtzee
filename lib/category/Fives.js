import Game from './Game.js'

export default class Fives extends Game {
  get id () {
    return 'scoreThrees'
  }

  setScore (dice) {
    this._score = 0
    for (let i = 0; i < dice.length; i++) {
      if (dice[i] === 5) {
        this._score = this._score + 5
      }
    }
  }
}
