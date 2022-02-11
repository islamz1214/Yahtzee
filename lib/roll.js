import Die from './Die.js'

export function roll () {
  const diceArray = new Array(5)

  for (let i = 0; i < 5; i++) {
    if (document.getElementById('hold' + i).checked == false) {
      diceArray[i] = Math.floor(Math.random() * 6) + 1
      // Update dice image
      document.getElementById('d' + i).src = '../images/dice' + diceArray[i] + '.gif'
    } else {
      // Keep the held dice value
      const diceSrc = document.getElementById('d' + i).src
      const heldDiceValue = parseInt(diceSrc.charAt(diceSrc.length - 5))
      diceArray[i] = heldDiceValue
    }
  }

  return diceArray
}
