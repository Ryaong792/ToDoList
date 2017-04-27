'use strict'
// will use later this const is used to wait for complete animation
// const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

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
}

module.exports = {
  addHandlers
}
