'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const discEvents = require('./disc/events')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#quick-in').on('click', authEvents.onQuickIn)

  $('#create-disc').on('submit', discEvents.onCreateDisc)
  $('#get-discs').on('click', discEvents.onGetDiscs)
})
