'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const todoui = require('./todoui.js')
const todoapi = require('./todoapi.js')
// will use later this const is used to wait for complete animation
// const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

// ********** Server communications API FOR TASK ******************
// **** Create Task ****
const createTask = function () {
  event.preventDefault()
  todoapi.createTask($(this).closest('a').data('id'), prompt('Enter the task name', ''))
  .then(todoui.createTaskSuccess)
  .catch(todoui.createTaskFailure)
  .done(getList)
}

// **** Get TASK ****
const getTask = function () {
  event.preventDefault()
  todoapi.getTask()
    .then(todoui.getTaskSuccess)
    .catch(todoui.getTaskFailure)
}

// **** UPDATE TASK ****
const updateTask = function () {
  event.preventDefault()
  todoapi.updateTask($(this).closest('li').prev().data('id'), $(this).closest('li').data('id'), prompt('Enter the new name', $(this).closest('li').data('name')))
    .then(todoui.updateTaskSuccess)
    .catch(todoui.updateTaskFailure)
    .done(getList)
}

// **** DISTORY TASK ****
const deleteTask = function () {
  event.preventDefault()
  todoapi.deleteTask($(this).data('id'), $(this).closest('li').data('id'))
    .then(todoui.deleteTaskSuccess)
    .catch(todoui.deleteTaskFailure)
}

// ********** Server communications API FOR LIST ******************
// **** CREATE LIST ****
const createList = function () {
  event.preventDefault()
  const data = getFormFields(this)
  todoapi.createList(data)
  .then(todoui.createListSuccess)
  .catch(todoui.createListFailure)
  .done(getList)
}

// **** GET LIST ****
const getList = function () {
  // event.preventDefault()
  todoapi.getList()
    .then(todoui.getListSuccess)
    .catch(todoui.getListFailure)
  $('.todolist').show()
}

// **** UPDATE LIST ****
const updateList = function () {
  event.preventDefault()
  todoapi.updateList($(this).closest('a').data('id'), prompt('Enter the new name', $(this).closest('a').data('name')))
    .then(todoui.updateListSuccess)
    .catch(todoui.updateListFailure)
    .done(getList)
}

// **** DISTORY LIST ****
const deleteList = function () {
  event.preventDefault()
  todoapi.deleteList($(this).closest('a').data('id'))
    .then(todoui.deleteListSuccess)
    .catch(todoui.deleteListFailure)
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
  // $('form').fadeOut(500)
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
// ************** OTHER JS FUCNTIONS ******************
const TableDropDown = function () {
  const $this = $(this)
  if ($this.next().hasClass('show')) {
    $this.next().removeClass('show')
  } else {
    $this.parent().parent().find('li .inner').removeClass('show')
    $this.next().toggleClass('show')
  }
}

const addList = function () {
  $('.dialog4').show()
}

const show = function () {
  $('.dialog9').show()
  $('#dialog9').removeClass('animated rollOut')
  $('#dialog9').addClass('animated flipInX')
}

const closeCl = function () {
  $('.dialog4').hide()
  $('.create').trigger('reset')
}

const closelist = function () {
  $('#dialog9').removeClass('animated flipInX')
  $('#dialog9').addClass('animated rollOut')
  $('.todolist').hide()
}

const addHandlers = () => {
  $('.bmenu').hide()
  $('#dialog9').hide()
  $('.todolist').hide()
  $('.stuff').on('click', show)
  $('.close_cl').on('click', closeCl)
  $('.close_list').on('click', closelist)
  $('.register-form').hide()
  $('.add_list').on('click', addList)
  $('.nav').hide()
  $('.dialog1').hide()
  $('.dialog2').hide()
  $('.dialog3').hide()
  $('.listing').on('click', getList)
    .on('click', getTask)
  $('.create').on('submit', createList)
  $('.list').on('click', '.delete', deleteList)
    .on('click', '.toggle', TableDropDown)
    .on('click', '.update', updateList)
    .on('click', '.add_task', createTask)
    .on('click', '.delete_task', deleteTask)
    .on('click', '.update_task', updateTask)
}

module.exports = {
  addHandlers,
  getList,
  getTask
}
