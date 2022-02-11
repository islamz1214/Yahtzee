import Game from './Game.js'

export default class FullHouse extends Game {
  get id () {
    return 'scoreFullHouse'
  }

  setScore (dice) {
    this._score = 0
    if (dice[0] == dice[1] && dice[2] == dice[3] && dice[2] == dice[4] && dice[0] != dice[2] ||
        dice[0] == dice[1] && dice[0] == dice[2] && dice[3] == dice[4] && dice[0] != dice[3]) {
        this._score = 25
    }
  }
}
