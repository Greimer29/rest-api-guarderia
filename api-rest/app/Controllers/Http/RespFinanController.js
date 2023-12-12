'use strict'

const RespFinan = use('App/Models/RespFinan')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with respfinans
 */
class RespFinanController {
  /**
   * Show a list of all respfinans.
   * GET respfinans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view, auth}) {
    const user = await auth.getUser()
    return await user.respFinans().fetch()
  }

  /**
   * Render a form to be used for creating a new respfinan.
   * GET respfinans/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({request,auth}) {
    const user = await auth.getUser()
    const {
      name,
      secondName,
      lastName,
      secondLastName,
      age,
      ci,
      nacionality,
      dirHabit,
      phone,
      acadLevel,
      labSituatio,
      profesion,
      actJob,
      jobPlace,
      jobPhone
    } = request.all();
    const respFinan = new RespFinan();
    respFinan.fill({
      nombre:name,
      segundo_nombre:secondName,
      apellido:lastName,
      segundo_apellido:secondLastName,
      edad:age,
      cedula:ci,
      nacionalidad:nacionality,
      dir_habitacion:dirHabit,
      telefono:phone,
      nivel_academico:acadLevel,
      situacion_laboral:labSituatio,
      ocupacion_actual:actJob,
      profesion:profesion,
      lugar_trabajo:jobPlace,
      telefono_trabajo:jobPhone
    })
    await user.respFinans().save(respFinan)
    return respFinan
  }

  /**
   * Create/save a new respfinan.
   * POST respfinans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single respfinan.
   * GET respfinans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing respfinan.
   * GET respfinans/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update respfinan details.
   * PUT or PATCH respfinans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a respfinan with id.
   * DELETE respfinans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = RespFinanController
