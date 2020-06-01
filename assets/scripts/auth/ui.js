const store = require('../store')
const discApi = require('../disc/api')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log(`signUpSuccess ran. Data is:`, data)

  // reset form:
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Sign up failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log(`signUpFailure ran. Error is:`, error)

  // reset form:
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log(`signInSuccess ran. Data is:`, data)

  // "store" the user object:
  // create a key on the store object
  // hold the user object inside
  store.user = data.user

  // Sign in succcess!
  // Hide the unauthenticated stuff,
  // Show the authenticated stuff:
  $('#authenticated').show()
  $('#unauthenticated').hide()
  discApi.getDiscs()
    .then(data => {
      // console.log(data)
      return data
    })
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
    .catch(console.error)

  // reset form:
  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('#message').text('Sign in failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log(`signInFailure ran. Error is:`, error)

  // reset form:
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log(`changePasswordSuccess ran. Data is:`, data)
  // reset form:
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#message').text('Change password failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log(`changePasswordFailure ran. Error is:`, error)

  // reset form:
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  // console.log('signOutSuccess ran and nothing was returned!')

  // Sign out success!
  // Hide the authenticated stuff, show the unauthenticated:
  $('#authenticated').hide()
  $('#unauthenticated').show()

  // clear out the user from the store object
  // set `user` to be `null`
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('signOutFailure ran. Error is :', error)
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure

}
