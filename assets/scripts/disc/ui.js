const store = require('../store')
const discApi = require('../disc/api')
// const authUi = require('../auth/ui')

const createDiscSuccess = function () {
  discApi.getDiscs()
    .then(data => {
      console.log(data)
      return data
    })
    .then(data => {
      let bag = ''
      for (let i = 0; i < data.bag.length; i++) {
        bag = bag + 'Make ' + data.bag[i].make + `<br />`
        bag = bag + 'Model ' + data.bag[i].model + `<br />`
        bag = bag + 'Weight ' + data.bag[i].weight + `<br />` + `<br />`
      }

      $('#collection').html(bag)
    })
    .catch(console.error)
}

const createDiscFailure = function () {

}

module.exports = {
  createDiscSuccess,
  createDiscFailure
}
