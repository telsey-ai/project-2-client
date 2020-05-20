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

module.exports = {
  createDisc,
  getDiscs
}
