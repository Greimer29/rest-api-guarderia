'use strict'

const Child = use('App/Models/Child')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with children
 */
class ChildController {
  /**
   * Show a list of all children.
   * GET children
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ auth }) {
    const user = await auth.getUser()
    return await user.childs().fetch()
  }

  /**
   * Render a form to be used for creating a new child.
   * GET children/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({auth,request}) {
    const user = await auth.getUser()
    const {
      name,
      secondName,
      lastName,
      secondLastName,
      sex,
      age,
      nacionality,
      procendence,
      country,
      state,
      city,
      cantBrothers,
      placeBrother,
      shirt,
      pants,
      shoes,
      weight,
      modality,
      turn
    } = request.all();
    const child = new Child();
    child.fill({
      primer_nombre:name,
      segundo_nombre:secondName,
      primer_apellido:lastName,
      segundo_apellido:secondLastName,
      sexo:sex,
      edad:age,
      nacionalidad:nacionality,
      procedencia:procendence,
      pais:country,
      estado:state,
      ciudad:city,
      cantidad_hermanos:cantBrothers,
      lugar_hermanos:placeBrother,
      talla_camisa:shirt,
      talla_pantalon:pants,
      talla_zapato:shoes,
      peso:weight,
      modalidad:modality,
      turno:turn,
    })
    await user.childs().save(child)
    return child
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
    const {id} = params
    return await Child.find(id)
  }

  async edit ({ params, request, response, view }) {
  }

  /**
   * Update child details.
   * PUT or PATCH children/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a child with id.
   * DELETE children/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ChildController
