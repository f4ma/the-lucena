/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import Flickity from 'flickity'

export function imageDrag() {
  window.Webflow ||= []
  window.Webflow.push(() => {
    let mainCarousel = '.tricks-slider'
    let mainSlides = '.tricks-slider_slide'
    let parallaxAmount = 49
    let verticalAmount = 60
    let rotationAmount = 0

    let flkty = new Flickity(mainCarousel, {
      contain: true,
      freeScroll: true,
      percentPosition: true,
      pageDots: false,
      cellSelector: mainSlides,
      cellAlign: 'center',
      imagesLoaded: true,
      wrapAround: true,
      resize: false,
      selectedAttraction: 0.01,
      dragThreshold: 1,
      freeScrollFriction: 0.05,
    })

    flkty.on('scroll', function (progress) {
      setImagePositions()
      $('.progress_fill').css('width', `${progress * 100}%`)
    })

    function setImagePositions() {
      $(mainSlides).each(function (index) {
        let targetElement = $(this)

        // Progress Left
        let elementOffsetLeft =
          targetElement.offset().left +
          targetElement.width() -
          $(mainCarousel).offset().left
        let progressLeft =
          elementOffsetLeft / ($(mainCarousel).width() + targetElement.width())
        // Progress Center
        let elementOffsetCenter =
          targetElement.offset().left +
          targetElement.width() / 2 -
          $(mainCarousel).width() / 2
        let parentWidth = $(mainCarousel).width() + targetElement.width()
        let progressCenter = elementOffsetCenter / parentWidth
        // Progress Center invert
        let progressCenterInvert = progressCenter
        if (progressCenterInvert < 0) {
          progressCenterInvert = progressCenterInvert * -1
        }

        // Image Move Distance
        let imageMoveDistance = parallaxAmount * progressLeft
        if (imageMoveDistance > parallaxAmount) {
          imageMoveDistance = parallaxAmount
        } else if (imageMoveDistance < 0) {
          imageMoveDistance = 0
        }

        targetElement
          .find('.image-effect')
          .css('transform', `translateX(-${imageMoveDistance}%)`)
        targetElement
          .find('.atricks-slider_wrap')
          .css(
            'transform',
            `translateY(${verticalAmount * progressCenter}%) rotate(${
              rotationAmount * progressCenter
            }deg)`
          )
      })
    }
    setImagePositions()

    window.addEventListener('load', function () {
      flkty.resize()
    })
  })
}
