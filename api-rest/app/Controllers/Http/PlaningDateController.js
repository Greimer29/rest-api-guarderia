'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const PlaningDate = use('App/Models/PlaningDate')

class PlaningDateController {
  async index ({ request, response, view }) {
    return await PlaningDate.all()
  }
  async create ({ request, response, view }) {
    const {tipo,fInicio,fFinal} = request.all()
    const planingDate = new PlaningDate()
    planingDate.fill({
      tipo,
      fecha_inicio:fInicio,
      fecha_final:fFinal
    })
    await planingDate.save()
    return planingDate
  }
  async store ({ request, response }) {
  }
  async show ({ params, request, response, view }) {
    const {id} = params
    return await PlaningDate.query().where('tipo',id).last()
  }
  async edit ({ params, request, response, view }) {
  }
  async update ({ params, request, response }) {
  }
  async destroy ({ params, request, response }) {
  }
}

module.exports = PlaningDateController
