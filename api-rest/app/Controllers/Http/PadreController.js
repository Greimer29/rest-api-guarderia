'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with padres
 */

const Padre = use('App/Models/Padre')

class PadreController {
  /**
   * Show a list of all padres.
   * GET padres
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await Padre.all();
  }

  /**
   * Render a form to be used for creating a new padre.
   * GET padres/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({request}) {
    const {
      name,
      secondName,
      lastName,
      secondLastName,
      sex,
      age,
      ci,
      nacionality,
      civilState,
      dirHabit,
      phone,
      acadLevel,
      labSituatio,
      profesion,
      jobPlace,
      jobPhone
    } = request.all();
    const padre = new Padre();
    padre.fill({
      nombre:name,
      segundo_nombre:secondName,
      apellido:lastName,
      segundo_apellido:secondLastName,
      sexo:sex,
      edad:age,
      cedula:ci,
      nacionalidad:nacionality,
      estado_civil:civilState,
      dir_habitacion:dirHabit,
      telefono:phone,
      nivel_academico:acadLevel,
      situacion_laboral:labSituatio,
      profesion:profesion,
      lugar_trabajo:jobPlace,
      telefono_trabajo:jobPhone
    })

    await padre.save()
    return padre
  }

  /**
   * Create/save a new padre.
   * POST padres
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single padre.
   * GET padres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing padre.
   * GET padres/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update padre details.
   * PUT or PATCH padres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({params,request}) {
    const {
      name,
      secondName,
      lastName,
      secondLastName,
      sex,
      age,
      ci,
      nacionality,
      civilState,
      dirHabit,
      phone,
      acadLevel,
      labSituatio,
      profesion,
      jobPlace,
      jobPhone
    } = request.all();
    const {id} = params;
    const padre = await Padre.find(id)
    padre.merge({
      'nombre':name,
      'segundo_nombre':secondName,
      'apellido':lastName,
      'segundo_apellido':secondLastName,
      'sexo':sex,
      'edad':age,
      'cedula':ci,
      'nacionalidad':nacionality,
      'estado_civil':civilState,
      'dir_habitacion':dirHabit,
      'telefono':phone,
      'nivel_academico':acadLevel,
      'situacion_laboral':labSituatio,
      'profesion':profesion,
      'lugar_trabajo':jobPlace,
      'telefono_trabajo':jobPhone
    })
    await padre.save()
    return padre
  }

  /**
   * Delete a padre with id.
   * DELETE padres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

  async destroy ({params}) {
    const {id} = params;
    const padre = await Padre.find(id)
    await padre.delete()
    return padre
  }
}

module.exports = PadreController
