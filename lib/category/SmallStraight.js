import Game from './Game.js'

export default class SmallStraight extends Game {
  get id () {
    return 'scoreSmallStraight'
  }

  setScore (dice) {
    this._score = 0
    for (let i = 0; i < 4; i++) {
      // remove duplicate value
      if (dice[i] == dice[i + 1]) {
        delete dice[i]
      }
    }
  }
}

