/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function portfolioAnimation() {
  window.Webflow ||= []
  window.Webflow.push(() => {
    ScrollTrigger.defaults({
      markers: false,
    })
  })
}
