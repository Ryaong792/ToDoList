'use strict'

const config = require('../config')
const store = require('../store')

// **** CREATE TASK ****
// **** TASK CREATED IS TIED TO LIST ID ****
const createTask = (id, name) => {
  return $.ajax({
    url: config.apiOrigin + '/lists/' + id + '/tasks',
    data: {task: {name: name}},
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// **** READ Task ****
const getTask = (id) => {
  console.log('get task ran')
  return $.ajax({
    url: config.apiOrigin + '/lists/' + id + '/tasks',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// *** UPDATE TASK ****
const updateTask = (listId, id, name) => {
  return $.ajax({
    url: config.apiOrigin + '/lists/' + listId + '/tasks/' + id,
    method: 'PATCH',
    data: {task: {name: name}},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// **** DISTORY LIST ****
const deleteTask = (listId, id) => {
  return $.ajax({
    url: config.apiOrigin + '/lists/' + listId + '/tasks/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// !!!!!!!!
// !!!!!!
// !!!!!
// !!!!
// !!!!!!!
// !!!!!
// !!!!!!!!

// **************** API for LIST ************************
// **** CREATE LIST ****
const createList = (data) => {
  console.log('created list ' + data)
  return $.ajax({
    url: config.apiOrigin + '/lists',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// *** READ LIST ****
const getList = () => {
  console.log('get list ran')
  return $.ajax({
    url: config.apiOrigin + '/lists',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// *** UPDATE LIST ****
const updateList = (id, name) => {
  return $.ajax({
    url: config.apiOrigin + '/lists/' + id,
    method: 'PATCH',
    data: {list: {name: name}},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// **** DISTORY LIST ****
const deleteList = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/lists/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getList,
  createList,
  deleteList,
  updateList,
  createTask,
  getTask,
  deleteTask,
  updateTask
  // createGame,
  // updateGame,
  // getGameOver
}
