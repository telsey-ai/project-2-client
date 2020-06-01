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
      // console.log(data)
      return data
    })
    .then(ui.getDiscsSuccess)
    .catch(ui.getDiscsFail)
}

const onDeleteDisc = (event) => {
  event.preventDefault()
  const discId = $(event.target).closest('section').data('id')
  // console.log(discId)
  const data = {
    "disc": {
    }
  }
  data.disc._id = discId
  api.deleteDisc(data)
    .then(api.getDiscs)
    .then(data => {
      let bag = ''
      for (let i = 0; i < data.bag.length; i++) {
        bag = bag + '<section data-id=' + data.bag[i]._id + '>'
        bag = bag + 'Make: ' + data.bag[i].make + `<br />`
        bag = bag + 'Model: ' + data.bag[i].model + `<br />`
        bag = bag + 'Weight: ' + data.bag[i].weight + `<br />`
        bag = bag + '<form class="update-disc">'
        bag = bag + '<input required type="text" name="disc[make]" placeholder="Disc Brand">'
        bag = bag + '<input required type="text" name="disc[model]" placeholder="Disc Model">'
        bag = bag + '<input required type="text" name="disc[weight]" placeholder="Disc Weight">'
        bag = bag + '<button type="submit" class="btn btn-secondary update-disc">Upate</button>'
        bag = bag + '</form>'
        bag = bag + '<button type="submit" class="btn btn-danger delete-disc">Remove</button>'
        bag = bag + '</section>' + `<br />`
      }

      $('#collection').html(bag)
    })
    .catch(ui.failure)
}

const onUpdateDisc = (event) => {
  event.preventDefault()
  // console.log('onupdatedisc ran')
  // console.log(event)
  const form = event.target
  const formData = getFormFields(form)
  // console.log(formData)
  const discId = $(event.target).closest('section').data('id')
  // console.log(discId)
  const data = {
    "disc": {
    }
  }
  data.disc._id = discId
  api.deleteDisc(data)
    .then(() => api.createDisc(formData))
    .then(() => onGetDiscs(event))
    .then(ui.updateDiscSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreateDisc,
  onGetDiscs,
  onDeleteDisc,
  onUpdateDisc
}
