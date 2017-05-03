'use strict'

const store = require('../store')
// const todo = require('../todo/events.js')
// const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

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
  $('.form-group').fadeOut(500)
  $('.nav').show()
  $('.wrapper').addClass('form-success animated rotateOut')
  $('.bmenu').removeClass('animated fadeOutUp')
  $('.bmenu').show().addClass('animated fadeInDown')
  $('#sign-in').trigger('reset')
}

const signInFailure = () => {
  $('#sign-in').trigger('reset')
  // $('.modal1').modal()
  $('.dialog1').show()
  setTimeout(function () {
    $('.dialog1').fadeOut()
  }, 4000)
  $('#sign-in').trigger('reset')
}

setTimeout(function () {
  $('.success').fadeOut().empty()
}, 5000)

const signOutSuccess = () => {
  store.user = null
  $('.form-group').fadeIn(500)
  $('.nav').hide()
  $('.bmenu').removeClass('animated fadeInDown')
  $('.bmenu').addClass('animated fadeOutUp')
  $('.wrapper').fadeIn(700)
  $('.wrapper').removeClass('form-success animated rotateOut')
  $('#dialog9').removeClass('animated flipInX')
  $('#dialog9').addClass('animated rollOut')
  $('.todolist').hide()
}

const signOutFailure = () => {
}

const changePasswordSuccess = () => {
  $('.dialog6').hide()
  $('#change-password')[0].reset()
  $('.dialog8').show()
  setTimeout(function () {
    $('.dialog8').fadeOut()
  }, 4000)
}

const changePasswordFailure = () => {
  $('#change-password')[0].reset()
  $('.dialog7').show()
  setTimeout(function () {
    $('.dialog7').fadeOut()
  }, 4000)
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
