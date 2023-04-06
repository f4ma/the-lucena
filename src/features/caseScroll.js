/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger, Draggable)

export function caseScroll() {
  $(function () {
    if ($('body').is('.home')) {
      // Scroll Animação

      let sections = document.querySelectorAll('.cases-main_item')
      let scrollContainer = document.querySelector('.section_projetos')
      let clamp, dragRatio

      let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
      })

      let horizontalScroll = ScrollTrigger.create({
        animation: scrollTween,
        trigger: scrollContainer,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        end: () => '+=' + scrollContainer.offsetWidth,
      })

      var drag = Draggable.create('.proxy', {
        trigger: scrollContainer,
        type: 'x',
        onPress() {
          clamp || ScrollTrigger.refresh()
          this.startScroll = horizontalScroll.scroll()
        },
        onDrag() {
          horizontalScroll.scroll(
            clamp(this.startScroll - (this.x - this.startX) * dragRatio)
          )
          // if you don't want it to lag at all while dragging (due to the 1-second scrub), uncomment the next line:
          // horizontalScroll.getTween().progress(1)
        },
      })[0]

      ScrollTrigger.addEventListener('refresh', () => {
        clamp = gsap.utils.clamp(
          horizontalScroll.start + 1,
          horizontalScroll.end - 1
        ) // don't let the drag-scroll hit the very start or end so that it doesn't unpin
        // total scroll amount divided by the total distance that the sections move gives us the ratio we can apply to the pointer movement so that it fits.
        dragRatio =
          scrollContainer.offsetWidth /
          (window.innerWidth * (sections.length - 1))
      })

      // Case Animation
      $('.section_portfolio').each(function (index) {
        let triggerElement = $(this)
        let targetElement = $('.portfolio-itens_wrapper')

        let tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: '.section_portfolio',
            // trigger element - viewport
            start: 'top top',
            end: '+=100%',
            markers: true,
            pin: true,
            pinSpacing: true,
            invalidateOnRefresh: true,
            scrub: 1,
          },
        })
        tl2.to(targetElement, {
          scale: 5,
          //  ease: 'none',
          duration: 1,
          xPercent: 5, // center the dot in the section area
          // yPercent: 20,
        })

        tl2.to(
          '.image-portfolio',
          {
            duration: 1,
            scale: 2, // center the dot in the section area
            yPercent: -40,
            // opacity: 0,
          },
          0
        )

        tl2.to(
          '.center-image-portfolio',
          {
            duration: 1,
            //  scale: 2, // center the dot in the section area
            yPercent: 10,
          },
          0
        )
      })

      // TypeSplit Js https://github.com/lukePeavey/SplitType
    }
  })
}
