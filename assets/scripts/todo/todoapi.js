'use strict'

const config = require('../config')
const store = require('../store')

// **************** API for LIST ************************

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

// **** DISTORY TASK ****
const deleteTask = (listId, id) => {
  return $.ajax({
    url: config.apiOrigin + '/lists/' + listId + '/tasks/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// *************************** LIST API *************************
// **** CREATE LIST ****
const createList = (data) => {
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

}
