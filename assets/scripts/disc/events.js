const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onCreateDisc = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  // console.log(formData)
  api.createDisc(formData)
    .then(ui.createDiscSuccess)
    .catch(ui.createDiscFailure)
}

const onGetDiscs = function (event) {
  event.preventDefault()

  api.getDiscs()
    .then(data => {
      console.log(data)
      return data
    })
    .then(ui.getDiscsSuccess)
    .catch(ui.getDiscsFail)
}

module.exports = {
  onCreateDisc,
  onGetDiscs
}
