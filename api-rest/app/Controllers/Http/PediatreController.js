'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pediatres
 */
const Pediatre = use('App/Models/Pediatre')

class PediatreController {
  /**
   * Show a list of all pediatres.
   * GET pediatres
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await Pediatre.all()
  }

  /**
   * Render a form to be used for creating a new pediatre.
   * GET pediatres/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({request}) {
    const {name,lastName,phone,jobPlace} = request.all();
    const pediatre = new Pediatre();
    pediatre.fill({
      nombre:name,
      apellido:lastName,
      telefono:phone,
      lugar_trabajo:jobPlace
    })
    await pediatre.save()
    return pediatre
  }
  /**
   * Create/save a new pediatre.
   * POST pediatres
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single pediatre.
   * GET pediatres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing pediatre.
   * GET pediatres/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update pediatre details.
   * PUT or PATCH pediatres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

  async update ({params,request}) {
    const {name,lastName,phone,jobPlace} = request.all();
    const {id} = params;
    const pediatre = await Pediatre.find(id)
    pediatre.merge({
      'nombre':name,
      'apellido':lastName,
      'telefono':phone,
      'lugar_trabajo':jobPlace
  })
    await pediatre.save()
    return pediatre
  }

  /**
   * Delete a pediatre with id.
   * DELETE pediatres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PediatreController
