'use strict'

const store = require('../store')
// const todo = require('../todo/events.js')

const signUpSuccess = (data) => {
  $('.dialog3').show()
  setTimeout(function () {
    $('.dialog3').fadeOut()
  }, 4000)
  $('form').fadeOut(500)
  $('.login-form').show()
  $('#sign-up').trigger('reset')
}

const signUpFailure = () => {
  $('.dialog2').show()
  setTimeout(function () {
    $('.dialog2').fadeOut()
  }, 4000)
  $('#sign-up').trigger('reset')
}

const signInSuccess = (response) => {
  store.user = response.user
  console.log(response)
  $('.form-group').fadeOut(500)
  $('.nav').show()
  $('.wrapper').addClass('form-success animated rotateOut')
  $('.logout').removeClass('animated fadeOutUp')
  $('.logout').show().addClass('animated fadeInDown')
  $('#sign-in').trigger('reset')
}

const signInFailure = () => {
  $('#sign-in').trigger('reset')
  // $('.modal1').modal()
  $('.dialog1').show()
  setTimeout(function () {
    $('.dialog1').fadeOut()
  }, 4000)
}

setTimeout(function () {
  $('.success').fadeOut().empty()
}, 5000)

const signOutSuccess = () => {
  store.user = null
  $('.form-group').fadeIn(500)
  $('.nav').hide()
  $('.logout').removeClass('animated fadeInDown')
  $('.logout').addClass('animated fadeOutUp')
  $('.wrapper').fadeIn(700)
  $('.wrapper').removeClass('form-success animated rotateOut')
}

const signOutFailure = () => {
}

const changePasswordSuccess = () => {
  // store.user = null
  // $('#sign-up').show()
  // $('#sign-in').show()
  // $('#sign-out').hide()
  // $('.stats').text('')
  // $('#change-password').hide()
  // $('.board').hide()
  // $('.success').show().text('Password has been change successfully! Please Sign in again with your new password to play!')
  // setTimeout(function () {
  //   $('.success').fadeOut().empty()
  // }, 7000)
  // $('#change-password').trigger('reset')
  // game.resetGame()
  // return false
}

const changePasswordFailure = () => {
  // $('.failure').show().text('Failed to change password! Old Password did not match! Please try again!')
  // setTimeout(function () {
  //   $('.failure').fadeOut().text('')
  // }, 6000)
  // $('#change-password').trigger('reset')
  // return false
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
