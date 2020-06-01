const config = require('../config')
const store = require('../store')

const createDisc = function (data) {
  return $.ajax({
    url: config.apiUrl + '/disc',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getDiscs = function () {
  return $.ajax({
    url: config.apiUrl + '/disc',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateDisc = function (discId, formData) {
  return $.ajax({
    url: config.apiUrl + '/disc',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteDisc = function (data) {
  return $.ajax({
    url: config.apiUrl + '/disc/' + store.user._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createDisc,
  getDiscs,
  updateDisc,
  deleteDisc
}
