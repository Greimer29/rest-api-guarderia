'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ImportInfo = use('App/Models/ImportInfo')

class ImportInfoController {
  /**
   * Show a list of all importinfos.
   * GET importinfos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view , auth }) {
    const user = await auth.getUser()
    return await user.importInfos().fetch()
  }

  /**
   * Render a form to be used for creating a new importinfo.
   * GET importinfos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view, auth }) {
    const user = await auth.getUser()
    const {
      ageMom,
      ageDad,
      pregnedPlaned,
      sickMomPregned,
      complicationsExpl,
      partType,
      hardComport,
      doAloneExp,
      bornGoodExp,
      favAutonomyExp,
      inflMayor,
      hardComportExp,
      grateComport,
      grateComportExp
    } = request.all()
    const importInfo = new ImportInfo()
    importInfo.fill({
      edad_madre_parto:ageMom,
      edad_padre_parto:ageDad,
      embarazo_planificado:pregnedPlaned,
      enfermedades_madre_embarazo:sickMomPregned,
      complicaciones_parto:complicationsExpl,
      tipo_parto:partType,
      nacio_bien:bornGoodExp,
      ayuda_hacer_cosas:doAloneExp,
      desarrollo_autonomia:favAutonomyExp,
      influencia:inflMayor,
      comportamiento_dificil:hardComport,
      manejo_difici_comportamiento:hardComportExp,
      comportamiento_agradable:grateComport,
      manejo_agradable_comportamiento:grateComportExp,
    })
    await user.importInfos().save(importInfo)
    return importInfo
  }

  /**
   * Create/save a new importinfo.
   * POST importinfos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single importinfo.
   * GET importinfos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing importinfo.
   * GET importinfos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update importinfo details.
   * PUT or PATCH importinfos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a importinfo with id.
   * DELETE importinfos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ImportInfoController
