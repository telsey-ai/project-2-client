const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const discApi = require('../disc/api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  // // console.log(form)
  const formData = getFormFields(form)
  // console.log(formData)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onQuickIn = function (event) {
  event.preventDefault()
  // console.log(event)
  const formData = {
    credentials: {
      email: 'te@te',
      password: 'te'
    }
  }
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  // console.log(formData)
  api.signIn(formData)
    // .then(discApi.getDiscs)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onQuickIn
}
