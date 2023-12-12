'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Healt = use('App/Models/Healt')

/**
 * Resourceful controller for interacting with healts
 */
class HealtController {
  /**
   * Show a list of all healts.
   * GET healts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view, auth }) {
    const user = await auth.getUser()
    return await user.healts().fetch()
  }

  /**
   * Render a form to be used for creating a new healt.
   * GET healts/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view, auth }) {
    const user = await auth.getUser()
    const {blodGF, diseases,vaccines,hospitalized,lessions,alergic,limits,especialist,easySick,feverMed} = request.all()
    const healt = new Healt()
    healt.fill({
      tipo_sangre:blodGF,
      vacunas_recibidas:vaccines,
      enfermedades_padecidas:diseases,
      hospitalizado_causa:hospitalized,
      lesiones_presentadas:lessions,
      alergias:alergic,
      limitaciones:limits,
      atendido_especialista:especialist,
      medicamentos_fiebre:feverMed,
      enfermo_facilidad:easySick
    })
    await user.healts().save(healt)
    return healt
  }

  /**
   * Create/save a new healt.
   * POST healts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single healt.
   * GET healts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const healts = await Healt.query().where('id','=',1).with('pediatres').first()
    return healts
  }

  /**
   * Render a form to update an existing healt.
   * GET healts/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update healt details.
   * PUT or PATCH healts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a healt with id.
   * DELETE healts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = HealtController
