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
  $('.login-form').show()//
})

// ************** end of login *************************
// **** start of adding task and removing task ****




const addHandlers = () => {
  $('.register-form').hide()
  $('.nav').hide()
}

module.exports = {
  addHandlers
}
