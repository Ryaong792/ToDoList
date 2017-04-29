'use strict'

const config = require('../config')
const store = require('../store')

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

const deleteList = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/lists/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

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

// creation of game to AJAX -
// const createGame = () => {
//   return $.ajax({
//     url: config.apiOrigin + '/games',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: ''
//   })
// }
// // updating game t
//
// const updateGame = (data) => {
//   const game = store.game
//   return $.ajax({
//     url: config.apiOrigin + '/games/' + game['id'],
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
//
// const getGameOver = (data) => {
//   return $.ajax({
//     url: config.apiOrigin + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

module.exports = {
  getList,
  createList,
  deleteList,
  updateList
  // createGame,
  // updateGame,
  // getGameOver
}
