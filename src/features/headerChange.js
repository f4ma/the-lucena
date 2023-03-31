/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function headerChange() {
  window.Webflow ||= []
  window.Webflow.push(() => {
    $('.dark-section').each(function (index) {
      ScrollTrigger.create({
        trigger: $(this),
        start: 'top 1%',
        end: 'bottom 10%',
        onEnter: () => {
          $('.nav-main_wrapper').addClass('light')
        },
        onEnterBack: () => {
          $('.nav-main_wrapper').addClass('light')
        },
      })
    })

    $('.light-section').each(function (index) {
      ScrollTrigger.create({
        trigger: $(this),
        start: 'top 10%',
        end: 'bottom 10%',
        onEnter: () => {
          $('.nav-main_wrapper').removeClass('light')
        },
        onEnterBack: () => {
          $('.nav-main_wrapper').removeClass('light')
        },
      })
    })
  })
}
