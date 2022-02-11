
import { roll } from './roll.js'
import Ones from './category/Ones.js'
import Twos from './category/Twos.js'
import Threes from './category/Threes.js'

export default function() {
  let rollCount = 0
  let dice = new Array(5).fill(0, 0, 5)
  
  const ones = new Ones()
  const twos = new Twos()
  const threes = new Threes()
  
  let isSelectable = false
  
  let categories = [ones, twos, threes]
  
  document.getElementById('roll').addEventListener('click', function () {
    // Roll dice
    if (rollCount < 3) {
      document.getElementById('countNum').innerHTML = ++rollCount
      dice = roll()
      isSelectable = true
  
      categories.forEach((element => {
        element.setScore(dice)
        mouseOver(element)
        mouseOut(element)
        click(element)
      }))
    }
    
  })
  
  function mouseOver (category) {
    document.getElementById(category.id).addEventListener('mouseover', function () {
      if (!category.hasScored && isSelectable) { document.getElementById(category.id).innerHTML = category.score }
    })
  }
  function mouseOut (category) {
    document.getElementById(category.id).addEventListener('mouseout', function () {
      if (!category.hasScored && isSelectable) { document.getElementById(category.id).innerHTML = '' }
    })
  }
  
  function click (category) {
    document.getElementById(category.id).addEventListener('click', function () {
      if (!category.hasScored && isSelectable) {
  
        document.getElementById(category.id).innerHTML = category.score
        category.hasScored = true
        isSelectable = false
        reset()
      }
    })
  }

  function reset() {
    categories.forEach((element => {
      element.hasScored = false
    }))

    
  }
  
}
