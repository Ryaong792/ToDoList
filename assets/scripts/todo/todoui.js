'use strict'
const store = require('../store.js')

const getListSuccess = (data) => {
  store.lists = data.lists
  console.log(data)
  $('.list').text('display the fucking list' + data.lists)
}

const createListSuccess = (data) => {
  store.lists = data.lists
  console.log('testing')
}

const getListFailure = (error) => {
  return error
}

// const createGameSuccess = (data) => {
//   store.game = data.game
// }
//
// const createGameFailure = (error) => {
//   return error
// }
// const getGameSuccess = (data) => {
//   store.games = data.games
//   $('.stats').text('Total games played ' + data.games.length)
// }
//
// const getGameFailure = (error) => {
//   return error
// }

module.exports = {
  getListSuccess,
  getListFailure,
  createListSuccess
  // createGameSuccess,
  // createGameFailure,
  // getGameSuccess,
  // getGameFailure
}
