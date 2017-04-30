'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const todoui = require('./todoui.js')
const todoapi = require('./todoapi.js')
// will use later this const is used to wait for complete animation
// const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

// pulls total game played by user (GET)

const createTask = function () {
  event.preventDefault()
  todoapi.createTask($(this).closest('li').data('id'), prompt('Enter the task name', ''))
  .then(todoui.createTaskSuccess)
  .catch(todoui.createTaskFailure)
}

const getTask = function () {
  event.preventDefault()
  todoapi.getTask()
    .then(todoui.getTaskSuccess)
    .catch(todoui.getTaskFailure)
}

// **** DISTORY TASK ****
const deleteTask = function () {
  event.preventDefault()
  todoapi.deleteTask($(this).closest('li').data('id'), $(this).closest('div').data('id'))
    .then(todoui.deleteTaskSuccess)
    .catch(todoui.deleteTaskFailure)
  $(this).closest('div').hide()
}

// ********** Server communications API FOR LIST ******************
// **** CREATE LIST ****
const createList = function () {
  event.preventDefault()
  const data = getFormFields(this)
  todoapi.createList(data)
  .then(todoui.createListSuccess)
  .catch(todoui.createListFailure)
}

// **** GET LIST ****
const getList = function () {
  event.preventDefault()
  todoapi.getList()
    .then(todoui.getListSuccess)
    .catch(todoui.getListFailure)
}

// **** UPDATE LIST ****
const updateList = function () {
  event.preventDefault()
  todoapi.updateList($(this).closest('li').data('id'), prompt('Enter the new name', $(this).closest('li').data('name')))
    .then(todoui.updateListSuccess)
    .catch(todoui.updateListFailure)
}

// **** DISTORY LIST ****
const deleteList = function () {
  event.preventDefault()
  todoapi.deleteList($(this).closest('li').data('id'))
    .then(todoui.deleteListSuccess)
    .catch(todoui.deleteListFailure)
  $(this).closest('li').hide()
}

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
// $('.material-icons').on('click', function (event) {
//   $(this).parents('tr').remove()
// })
// **** start of adding task and removing task ****

const addHandlers = () => {
  $('.dialog5').show()
  $('.dialog4').show()
  $('.register-form').hide()
  $('.nav').hide()
  $('.logout').hide()
  $('.dialog1').hide()
  $('.dialog2').hide()
  $('.dialog3').hide()
  $('.listing').on('click', getList)
    .on('click', getTask)
  $('#create-list').on('submit', createList)
  $('.list').on('click', '.delete', deleteList)
    .on('click', '.update', updateList)
    .on('click', '.add_task', createTask)
    .on('click', '.delete_task', deleteTask)
}

module.exports = {
  addHandlers
}
