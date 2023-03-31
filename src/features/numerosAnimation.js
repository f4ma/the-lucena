/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export function numerosAnimation() {
  window.Webflow ||= []
  window.Webflow.push(() => {
    $('.section_numeros').each(function (index) {
      let childTriggers = $(this).find('.numero-scroll_content-item')
      let childTargets = $(this).find('.numero-scroll_visual-item')
      // switch active class
      function makeItemActive(index) {
        childTriggers.removeClass('is-active')
        childTargets.removeClass('is-active')
        childTriggers.eq(index).addClass('is-active')
        childTargets.eq(index).addClass('is-active')
      }
      makeItemActive(0)
      // create triggers
      childTriggers.each(function (index) {
        ScrollTrigger.create({
          trigger: $(this),
          start: 'top center',
          end: 'bottom center',
          onToggle: (isActive) => {
            if (isActive) {
              makeItemActive(index)
            }
          },
        })
      })
      // add click listener to child triggers
      childTriggers.on('click', function () {
        const targetIndex = childTriggers.index(this)
        makeItemActive(targetIndex)
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y:
              $(this).offset().top -
              ($(window).height() - $(this).outerHeight()) / 2,
          },
          ease: 'power2.inOut',
        })
      })

      gsap.to('.numero-scroll_visual-item', {
        y: '239px',
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.numeros-main-content_wrapper',
          // start: "top bottom", // the default values
          // end: "bottom top",
          scrub: '1.0',
        },
      })
    })
  })
}
