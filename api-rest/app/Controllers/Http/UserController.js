'use strict'
const User = use('App/Models/User')

class UserController {
  async index () {
    return await User.all()
  }

  async create ({request,auth}) {
    const {name,email,username,password,type} = request.all();
    const user = new User();
    user.fill({
      name,
      email,
      username,
      password,
      type
    })

    await user.save()
    return user
  }

  async show ({params}){
    const {id} = params
    return await User.query().where({id}).with('childs').with('fathers').fetch()
  }

  async destroy ({params}) {
    const {id} = params;
    const user = await User.find(id)
    await user.delete()
    return user
  }

  async update ({params,request}) {
    const {email,username,password} = request.all();
    const {id} = params;
    const user = await User.find(id)
    user.merge({
      'email':email,
      'username':username,
      'password':password
    })
    await user.save()
    return user
  }

  async login({request,auth}){
    const {email,password} = request.all()
    const token = await auth.attempt(email,password)
    const user = await User.query().where({email}).first()
    token.user = user
    return token
  }
}

module.exports = UserController
