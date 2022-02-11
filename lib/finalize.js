// ****************
// Total Score
// ****************
export function finalize () {
  // Total score
  for (i = 0; i < 13; i++) {
    totalScore += parseInt(document.getElementById('score' + i).innerHTML)
  }

  // Bonus points
  for (i = 0; i < 5; i++) {
    bonus += parseInt(document.getElementById('score' + i).innerHTML)
    if (bonus >= 63) {
      totalScore = totalScore + 35
    }
  }

  // Display Score
  document.getElementById('totalScore').innerHTML = totalScore

  // Stop roll button
  count = 3
}
