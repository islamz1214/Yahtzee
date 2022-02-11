// ****************
// Update Score
// ****************
export function update (i) {
  // Finalize score
  if (count > 0 && canScore[i] == true) {
	   document.getElementById('score' + i).innerHTML = currScore[i]
    canScore[i] = false
	   reset()
  }

  let valid = 0

  // Check if player scores all boxes
  for (i = 0; i < 13; i++) {
    if (canScore[i] == false) {
      valid++
    }
  }

  // Reveal final score
  if (valid == 13) {
    finalizeScore()
  }

  // ****************
  // Reset
  // ****************
  function reset () {
    // reset checkboxes
    for (i = 0; i < 5; i++) {
      document.getElementById('hold' + i).checked = false
    }

    // reset dice
    for (i = 0; i < 5; i++) {
      document.getElementById('d' + i).src = 'images/dice0.gif'
    }

    // reset count
    count = 0
    document.getElementById('countNum').innerHTML = count
  }
}
