'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Personal = use('App/Models/Personal')

class PersonalController {

  async index ({ request, response, view }) {
    return await Personal.all()
  }

  async create ({ request, response, view }) {
    const {
      name,
      lastName,
      age,
      ci,
      phone,
      email,
      academicLevel,
      dir
    } = request.all()
   const personal = new Personal()
    personal.fill({
      nombre:name,
      apellido:lastName,
      cedula:ci,
      edad:age,
      telefono:phone,
      email:email,
      nivel_academico:academicLevel,
      dir:dir
    })
    await personal.save()
    return personal
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = PersonalController
