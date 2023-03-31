/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function accordionAnimation() {
  window.Webflow ||= []
  window.Webflow.push(() => {
    // seleciona o elemento ".pilares-head-wrapper"
    // seleciona o elemento ".pilares-head-wrapper"
    const pilaresHead = document.querySelector('.pilares-head-wrapper')

    // seleciona o elemento ".pilares-content-wrapper.is-1"
    const pilaresContent = document.querySelector(
      '.pilares-content-wrapper.is-1'
    )

    // adiciona um listener de evento de mouseover ao elemento ".pilares-head-wrapper"
    pilaresHead.addEventListener('mouseover', function () {
      // usa a função "toggleClass" do jQuery para alternar a classe "active" na div ".pilares-content-wrapper.is-1"
      $(pilaresContent).toggleClass('active')
    })
  })
}
