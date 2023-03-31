/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import gsap from 'gsap'
import MouseFollower from 'mouse-follower'
MouseFollower.registerGSAP(gsap)

export function mouseAnimation() {
  window.Webflow ||= []
  window.Webflow.push(() => {
    const cursor = new MouseFollower({
      speed: 0.8,
      skewing: 1,
      skewingText: 3,
    })
    const el = document.querySelectorAll('.video-image')
    el.forEach(function (element) {
      element.addEventListener('mouseenter', () => {
        cursor.setText('Play')
      })

      element.addEventListener('mouseleave', () => {
        cursor.removeText()
      })
    })
  })
}
