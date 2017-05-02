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
}

const signUpFailure = () => {
  $('.dialog2').show()
  setTimeout(function () {
    $('.dialog2').fadeOut()
  }, 4000)
}

const signInSuccess = (response) => {
  store.user = response.user
  console.log(response)
  $('.form-group').fadeOut(500)
  $('.nav').show()
  $('.wrapper').addClass('form-success animated rotateOut')
  $('.bmenu').removeClass('animated fadeOutUp')
  $('.bmenu').show().addClass('animated fadeInDown')
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
  $('.bmenu').removeClass('animated fadeInDown')
  $('.bmenu').addClass('animated fadeOutUp')
  $('.wrapper').fadeIn(700)
  $('.wrapper').removeClass('form-success animated rotateOut')
}

const signOutFailure = () => {
}

const changePasswordSuccess = () => {
  $('dialog6').hide()
}

const changePasswordFailure = () => {
  alert('ohh damn it failed')
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
