'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const todoui = require('./todoui.js')
const todoapi = require('./todoapi.js')
// will use later this const is used to wait for complete animation
// const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

// pulls total game played by user (GET)
const getList = function () {
  event.preventDefault()
  todoapi.getList()
    .then(todoui.getListSuccess)
    .catch(todoui.getListFailure)
}

const createList = function () {
  event.preventDefault()
  const data = getFormFields(this)
  todoapi.createList(data)
  .then(todoui.createListSuccess)
  .catch(todoui.createListFailure)
}

const deleteList = function () {
  event.preventDefault()
  todoapi.deleteList($(this).closest('li').data('id'))
    .then(todoui.deleteListSuccess)
    .catch(todoui.deleteListFailure)
  $(this).closest('li').hide()
}

const updateList = function () {
  event.preventDefault()
  todoapi.updateList($(this).closest('li').data('id'), prompt('Enter the new name', $(this).closest('li').data('name')))
    .then(todoui.updateListSuccess)
    .catch(todoui.updateListFailure)
}

// server communications ****************** see game API
// pulls new game from server (POST)
// const createGame = function () {
//   gameapi.createGame()
//   .then(gameui.createGameSuccess)
//   .catch(gameui.createGameFailure)
// }
// // send update of current game to server (PATCH)
// const updateGame = function (data) {
//   gameapi.updateGame(data)
// }
// // pulls total game played by user (GET)
// const getGameOver = function (data) {
//   gameapi.getGameOver(data)
//   .then(gameui.getGameSuccess)
//   .catch(gameui.getGameFailure)
// }

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
// ************** Task add / remove ********************

// working remove from data-table
$('.material-icons').on('click', function (event) {
  $(this).parents('tr').remove()
})

// $('.material-icons').on('click', function (e) {
//   $('.mdl-data-table__cell--non-numeric').remove()
// })

// $('button').click(function() {
//   var new_task = $('#input').val()
//   $('#list').append('<li><label for="checkbox_id">'+new_task+'</label></li>')
//   return false   // This is new line of code
// })

// **** start of adding task and removing task ****

const addHandlers = () => {
  $('.register-form').hide()
  $('.nav').hide()
  $('.logout').hide()
  $('.dialog1').hide()
  $('.dialog2').hide()
  $('.dialog3').hide()
  $('.listing').on('click', getList)
  $('#create-list').on('submit', createList)
  $('.list').on('click', '.delete', deleteList).on('click', '.update', updateList)
}

module.exports = {
  addHandlers
}
