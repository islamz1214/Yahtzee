import Game from './Game.js'

export default class ThreeOfAKind extends Game {
  get id () {
    return 'scoreThreeOfAKind'
  }

  setScore (dice) {
    this._score = 0
    if (dice[0] == dice[1] && dice[1] == dice[2] ||
        dice[1] == dice[2] && dice[2] == dice[3] ||
        dice[2] == dice[3] && dice[3] == dice[4]) {
        this._score = dice[0] + dice[1] + dice[2] + dice[3] + dice[4] + dice[5]
    }
  }
}

