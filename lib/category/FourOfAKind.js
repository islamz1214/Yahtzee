import Game from './Game.js'

export default class Fives extends Game {
  get id () {
    return 'scoreThrees'
  }

  setScore (dice) {
    this._score = 0
    if (dice[0] == dice[1] && dice[1] == dice[2] && dice[2] == dice[3] ||
        dice[1] == dice[2] && dice[2] == dice[3] && dice[3] == dice[4]) {
    this._score = dice[0] + dice[1] + dice[2] + dice[3] + dice[4] + dice[5]
    }
  }
}

