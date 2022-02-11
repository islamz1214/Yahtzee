import Game from './Game.js'

export default class Threes extends Game {
  get id () {
    return 'scoreThrees'
  }

  setScore (dice) {
    this._score = 0
    this._score = dice[0] + dice[1] + dice[2] + dice[3] + dice[4] + dice[5]
  }
}
