'use strict'
const User = use('App/Models/User')

class MasterController {
  async index(){
    return await User.all()
  }
}

module.exports = MasterController
