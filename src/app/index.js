/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss'

// ================================
// START YOUR APP HERE
// ================================
var header = document.getElementsByClassName('header')[0]

function checkScroll () {
  var scrollPosY = window.pageYOffset | document.body.scrollTop

  if (scrollPosY > 0) {
    header.classList.add('header--shrink')
  } else {
    header.classList.remove('header--shrink')
  }
}

checkScroll()

window.onscroll = checkScroll
