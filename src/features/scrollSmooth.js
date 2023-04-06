import Lenis from '@studio-freight/lenis'

export function scrollSmoth() {
  window.Webflow ||= []
  window.Webflow.push(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
}
