export default class Game {
  constructor () {
    this._score = 0
    this._hasScored = false
  }

  get id () {
    return this._id
  }

  get score () {
    return this._score
  }

  get hasScored () {
    return this._hasScored
  }

  set hasScored (bool) {
    if (bool) {
      this._hasScored = true
    } else {
      [
        this._hasScored = false
      ]
    }
  }
}
