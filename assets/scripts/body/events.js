'use strict'

const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

// **** LOGIN BUTTONS / WECLOME WINDOW! ****

// ****login****
$('#login-button').click(function (event) {
  event.preventDefault()
  $('form').fadeOut(500)
  $('.nav').show()
  // need to remove this class when signout happens!
  $('.wrapper').addClass('form-success animated rotateOut')
  $('.logout').removeClass('animated fadeOutUp')
  $('.logout').show().addClass('animated fadeInDown')
})

// ****register-form ****
$('#register-button').click(function (event) {
  event.preventDefault()
  $('form').fadeOut(500)
// This login will be removed - Will add to API area instead
  $('.login-form').show()//
})

$('.register').click(function () {
  event.preventDefault()
  $('.login-form').hide()
  $('.register-form').show()
})

$('.sign-in').click(function (event) {
  event.preventDefault()
  $('form').fadeOut(500)
// This login will be removed - Will add to API area instead
  $('.login-form').show()
})

$('.logout').click(function (event) {
  event.preventDefault()
  $('form').fadeIn(500)
  $('.nav').hide()
  $('.logout').removeClass('animated fadeInDown')
  $('.logout').addClass('animated fadeOutUp')
  $('.wrapper').fadeIn(700)
  $('.wrapper').removeClass('form-success animated rotateOut')
})

// ************** end of login *************************
// **** start of adding task and removing task ****
const addHandlers = () => {
  $('.register-form').hide()
  $('.nav').hide()
  $('.logout').hide()
}

module.exports = {
  addHandlers
}
