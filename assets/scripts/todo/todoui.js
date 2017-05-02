'use strict'
const store = require('../store.js')
const displayList = require('../templates/display-list.handlebars')
// import displayList from '../templates/display-list.handlebars'
const displayTask = require('../templates/display-list-tasks.handlebars')

// **************** SUCCESS / FAILURE FOR TASK *********************
// **** CREATE TASK SUCCESS / FAILURE ****
// **** SUCCESS CREATED TASK ****
const createTaskSuccess = (data) => {
  store.tasks = data.tasks
}
const createTaskFailure = (data) => {
  alert('Failed to update')
}

const updateTaskSuccess = (data) => {
  data = data.list
  const item = $('.list').find('li[data-id=' + data.id + ']')
  item.find('p').html('list: ' + data.name)
}
// **** FAILURE UPDATE LIST ****
const updateTaskFailure = (data) => {
  alert('Failed to update')
}
// rtrt
// register-button
// 44444
// 4444

// **** READ TASK SUCCESS / FAILURE  ****
// **** SUCCESS READ TASK****
const getTaskSuccess = (data) => {
  console.log(data)
  console.log(displayList)
  const displayTaskHtml = displayTask({
    task: data.task
  })
  console.log(displayTaskHtml)
  $('.task').html(displayTaskHtml)
}
// **** FAILURE READ LIST ****
const getTaskFailure = (error) => {
  return error
}

// **** UPDATE TASK SUCCESS / FAILURE  ****
// **** SUCCESS UPDATE TASK ****
// div > p:eq(0) this finds the first p on the div
// const updateTaskSuccess = (data) => {
//   data = data.list
//   const item = $('.list').find('li[data-id=' + data.id + ']')
//   item.find('h2').html(' Name: ' + data.name)
//   item.find('div > p:eq(0)').html('list: ' + data.name)
// }
// // **** FAILURE UPDATE LIST ****
// const updateTaskFailure = (data) => {
//   alert('Failed to update')
// }
// **** DELETE TASK SUCCESS / FAILURE  ****
// **** SUCCESS DELETE TASK****
// the data id is the id from handebars
const deleteTaskSuccess = (data) => {
  $('.list').find('li[data-id=' + data.id + ']').remove()
}
// **** FAILURE READ LIST ****
const deleteTaskFailure = (data) => {
  $('.list').find('li[data-id=' + data.id + ']').show()
}

// *****************************************************************
//
//
//
//
//
// **************** SUCCESS / FAILURE FOR LIST *********************
// **** CREATE LIST SUCCESS / FAILURE ****
// **** SUCCESS CREATED LIST ****
const createListSuccess = (data) => {
  store.lists = data.lists
  $('.dialog4').hide()
}
// **** FAILURE CREATED LIST ****
const createListFailure = (error) => {
  return error
}

// **** READ LIST SUCCESS / FAILURE  ****
// **** SUCCESS READ LIST****
const getListSuccess = (data) => {
  console.log(data)
  console.log(displayList)
  const displayListHtml = displayList({
    list: data.lists
  })
  console.log(displayListHtml)
  $('.list').html(displayListHtml)
}
// **** FAILURE READ LIST ****
const getListFailure = (error) => {
  return error
}

// **** UPDATE LIST SUCCESS / FAILURE  ****
// **** SUCCESS UPDATE LIST ****
// div > p:eq(0) this finds the first p on the div
const updateListSuccess = (data) => {
  data = data.list
  const item = $('.list').find('a[data-id=' + data.id + ']')
  item.find('h2').html(' Name: ' + data.name)
  item.find('p').html('list: ' + data.name)
}
// **** FAILURE UPDATE LIST ****
const updateListFailure = (data) => {
  alert('Failed to update')
}
// **** DELETE LIST SUCCESS / FAILURE  ****
// **** SUCCESS DELETE LIST****
// the data id is the id from handebars
const deleteListSuccess = (data) => {
  //$('.list').find('a[data-id=' + data.id + ']').remove()
  $('.list').find('a[data-id=' + data.id + ']').addClass('animation hinge').remove()
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
