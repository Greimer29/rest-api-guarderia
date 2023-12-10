'use strict'

const Planning = use('App/Models/Planning')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with plannings
 */
class PlanningController {
  /**
   * Show a list of all plannings.
   * GET plannings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await Planning.all()
  }

  /**
   * Render a form to be used for creating a new planning.
   * GET plannings/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const {tipo,fInicio,fFinal} = request.all()
    const planning = new Planning()
    planning.fill({
      tipo,
      fecha_inicio:fInicio,
      fecha_final:fFinal
    })
    await planning.save()
    return planning
  }

  /**
   * Create/save a new planning.
   * POST plannings
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single planning.
   * GET plannings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const {id} = params
    const planning = await Planning.query().where('tipo',id).fetch()
    return planning
  }

  /**
   * Render a form to update an existing planning.
   * GET plannings/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update planning details.
   * PUT or PATCH plannings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

  async update ({params,request,response}) {
    const {id} = params;
    const {tipo,fIni,fFin} = request.all();
    const planning = await Planning.find(id)
    planning.merge({
      tipo:tipo,
      fecha_inicio:fIni,
      fecha_final:fFin
    })
    await planning.save()
    return planning
  }

  /**
   * Delete a planning with id.
   * DELETE plannings/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PlanningController
