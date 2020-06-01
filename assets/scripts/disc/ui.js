const store = require('../store')
const discApi = require('../disc/api')
// const showDiscs = require('../templates/disc-listing.handlebars')
// const authUi = require('../auth/ui')

const createDiscSuccess = function () {
  discApi.getDiscs()
    .then(data => {
      // console.log(data)
      return data
    })
    .then(data => {
      // const showDiscsHtml = showDiscs({ discs: data.bag })
      // $('#collection').html(showDiscsHtml)

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
      $('#message').text('Created Disc!')
      $('#message').removeClass()
      $('#message').addClass('success')
      $('form').trigger('reset')
    })
    .catch(console.error)
}

const createDiscFailure = function () {
  $('#message').text('Create Disc Failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log(`signInFailure ran. Error is:`, error)

  // reset form:
  $('form').trigger('reset')
}

const updateDiscSuccess = function () {
  discApi.getDiscs()
    .then(data => {
      // console.log(data)
      return data
    })
    .then(data => {
      // const showDiscsHtml = showDiscs({ discs: data.bag })
      // $('#collection').html(showDiscsHtml)

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
        bag = bag + '<button type="submit" class="btn btn-secondary update-disc">Update</button>'
        bag = bag + '</form>'
        bag = bag + '<button type="submit" class="btn btn-danger delete-disc">Remove</button>'
        bag = bag + '</section>' + `<br />`
      }

      $('#collection').html(bag)
      $('#message').text('Disc updated successfully!')
      $('#message').removeClass()
      $('#message').addClass('success')
      $('form').trigger('reset')
    })
    .catch(console.error)
}

const updateDiscFailure = function () {
  $('#message').text('Update Disc Failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log(`signInFailure ran. Error is:`, error)

  // reset form:
  $('form').trigger('reset')
}

module.exports = {
  createDiscSuccess,
  createDiscFailure,
  updateDiscSuccess,
  updateDiscFailure
}
