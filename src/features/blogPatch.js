/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

export function blogPatch() {
  window.Webflow ||= []
  window.Webflow.push(() => {
    // Manage active state for the All items button as filters are used
    $('.fs-radio_field-1').click(function () {
      if ($('#all-items-radio').is(':checked')) {
        $('#all-items-wrapper').addClass('is-active')
      } else {
        $('#all-items-wrapper').removeClass('is-active')
      }
    })
  })
}
