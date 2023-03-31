/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import gsap from 'gsap'
import { Draggable } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export function caseScroll() {
  window.Webflow ||= []
  window.Webflow.push(() => {
    const container = document.querySelector('.projetos-main_wrapper')
    const sections = gsap.utils.toArray('.cases-main_item')
    const texts = gsap.utils.toArray('.anim')

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.section_projetos',
        pin: true,
        pinSpacing: true,
        scrub: 1,
        end: '+=3000',
        //  snap: 1 / (sections.length - 1),
        // markers: true,
      },
    })

    console.log(1 / (sections.length - 1))

    // whizz around the sections
    sections.forEach((section) => {
      // grab the scoped text
      let text = section.querySelectorAll('.nome-cliente')

      // bump out if there's no items to animate
      if (text.length === 0) return

      /*
      // do a little stagger
      gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: 'elastic',
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: 'left center',
          markers: true,
        },
      })
      */
    })

    // TypeSplit Js https://github.com/lukePeavey/SplitType

    let typeSplit = new SplitType('.nome-cliente', {
      types: 'words, chars',
      tagName: 'span',
    })

    const words = document.querySelectorAll('.char')

    words.forEach((word, index) => {
      let value = word.innerHTML
      let valueup = value.toUpperCase()
      word.setAttribute('data-char', valueup)
    })
  })
}
