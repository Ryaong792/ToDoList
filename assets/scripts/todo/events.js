'use strict'
// will use later this const is used to wait for complete animation
// const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

// **** LOGIN BUTTONS / WECLOME WINDOW! ****
// ****login****
$('#login-button').click(function (event) {
  event.preventDefault()
})
// ****register-form ****
$('#register-button').click(function (event) {
  event.preventDefault()
})
// ***register link***
$('.register').click(function () {
  event.preventDefault()
  $('.login-form').hide()
  $('.register-form').show()
})
// ***sign-in link***
$('.sign-in').click(function (event) {
  event.preventDefault()
  $('form').fadeOut(500)
  $('.login-form').show()
})
// ***Logout button***
$('.logout').click(function (event) {
  event.preventDefault()
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
