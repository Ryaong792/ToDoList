'use strict'
const store = require('../store.js')
const displayList = require('../templates/display-list.handlebars')
// import displayList from '../templates/display-list.handlebars'

const getListSuccess = (data) => {
  console.log(data)
  console.log(displayList)
  const displayListHtml = displayList({
    list: data.lists
  })
  console.log(displayListHtml)
  $('.list').html(displayListHtml)
}

const createListSuccess = (data) => {
  store.lists = data.lists
  console.log('testing')
}

// the data id is the id from handebars
const deleteListSuccess = (data) => {
  $('.list').find('li[data-id=' + data.id + ']').remove()
}

const deleteListFailure = (data) => {
  $('.list').find('li[data-id=' + data.id + ']').show()
}

// div > p:eq(0) this finds the first p on the div
const updateListSuccess = (data) => {
  data = data.list
  const item = $('.list').find('li[data-id=' + data.id + ']')
  item.find('h2').html(' Name: ' + data.name)
  item.find('div > p:eq(0)').html('list: ' + data.name)
}

const updateListFailure = (data) => {
  alert('Failed to update')
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
  createListSuccess,
  deleteListSuccess,
  deleteListFailure,
  updateListSuccess,
  updateListFailure
  // createGameSuccess,
  // createGameFailure,
  // getGameSuccess,
  // getGameFailure
}
