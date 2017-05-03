'use strict'
const store = require('../store.js')
const displayList = require('../templates/display-list.handlebars')
const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

// **************** SUCCESS / FAILURE FOR TASK *********************
// **** CREATE TASK SUCCESS / FAILURE ****
// **** SUCCESS CREATED TASK ****
const createTaskSuccess = (data) => {
  store.tasks = data.tasks
}
const createTaskFailure = (data) => {
  alert('Failed to update')
}

// **** READ TASK SUCCESS / FAILURE  ****
// **** SUCCESS READ TASK****
const getTaskSuccess = (data) => {
}
// **** FAILURE READ TASK ****
const getTaskFailure = () => {

}
// **** UPDATE TASK SUCCESS / FAILURE  ****
// **** SUCCESS UPDATE TASK****
const updateTaskSuccess = (data) => {
  const item = $('.list').find('li[data-id=' + data.id + ']')
  item.find('p').html(data.name +
    '<i class="material-icons delete_task" data-id="{{this.list_id}}" name="button">delete</i>' +
    '<i class="material-icons update_task" name="button">mode_edit</i>')
}
// **** FAILURE UPDATE LIST ****
const updateTaskFailure = (data) => {
  alert('Failed to update')
}
// **** DELETE TASK SUCCESS / FAILURE  ****
// **** SUCCESS DELETE TASK****
const deleteTaskSuccess = (data) => {
  $('.list').find('li[data-id=' + data.id + ']').remove()
  $(this).closest('li').hide()
}
// **** FAILURE DELETE TASK ****
const deleteTaskFailure = (data) => {
  $('.list').find('li[data-id=' + data.id + ']').show()
}

// **************** SUCCESS / FAILURE FOR LIST *********************
// **** CREATE LIST SUCCESS / FAILURE ****
// **** SUCCESS CREATED LIST ****
const createListSuccess = (data) => {
  store.lists = data.lists
  $('.dialog4').hide()
  $('.create').trigger('reset')
}

// **** FAILURE CREATED LIST ****
const createListFailure = (error) => {
  $('#create_list')[0].reset
  return error
}

// **** READ LIST SUCCESS / FAILURE  ****
// **** SUCCESS READ LIST****
const getListSuccess = (data) => {
  const displayListHtml = displayList({
    list: data.lists
  })
  $('.list').html(displayListHtml)
}
// **** FAILURE READ LIST ****
const getListFailure = (error) => {
  return error
}

// **** UPDATE LIST SUCCESS / FAILURE  ****
// **** SUCCESS UPDATE LIST ****
const updateListSuccess = (data) => {
  data = data.list
  const item = $('.list').find('a[data-id=' + data.id + ']')
  item.find('p').html(data.name)
}
// **** FAILURE UPDATE LIST ****
const updateListFailure = (data) => {
}
// **** DELETE LIST SUCCESS / FAILURE  ****
// **** SUCCESS DELETE LIST****
const deleteListSuccess = (data) => {
  $('.list').find('a[data-id=' + data.id + ']').addClass('animation hinge').one(animationEnd, function () {
    $(this).closest('a').hide()
  })
}
// **** FAILURE READ LIST ****
const deleteListFailure = (data) => {
  $('.list').find('a[data-id=' + data.id + ']').show()
}

module.exports = {
  getListSuccess,
  getListFailure,
  createListSuccess,
  createListFailure,
  deleteListSuccess,
  deleteListFailure,
  updateListSuccess,
  updateListFailure,
  createTaskSuccess,
  createTaskFailure,
  getTaskSuccess,
  getTaskFailure,
  deleteTaskSuccess,
  deleteTaskFailure,
  updateTaskFailure,
  updateTaskSuccess
}
