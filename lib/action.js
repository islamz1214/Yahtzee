export default {
  mouseOver: function (category) {
    document.getElementById(category.id).addEventListener('mouseover', function () {
      if (!category.hasScored) { document.getElementById(category.id).innerHTML = category.score }
    })
  },
  mouseOut: function (category) {
    document.getElementById(category.id).addEventListener('mouseout', function () {
      if (!category.hasScored) { document.getElementById(category.id).innerHTML = '' }
    })
  },
  click: function (category) {
    document.getElementById(category.id).addEventListener('click', function () {
      if (!category.hasScored) {
        console.log('Im inside: ' + category.score)
        document.getElementById(category.id).innerHTML = category.score
        category.hasScored = true
      }
    })

    console.log('debuggg: ' + category.hasScored)
  }
}
