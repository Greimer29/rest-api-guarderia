'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Teacher = use('App/models/Teacher')

/**
 * Resourceful controller for interacting with teachers
 */
class TeacherController {
  /**
   * Show a list of all teachers.
   * GET teachers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Teacher.all()
  }

  /**
   * Render a form to be used for creating a new teacher.
   * GET teachers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const {name,lastName,age,ci,phone,email,academicLevel,dir} = request.all();
    const teacher = new Teacher();
    teacher.fill({
      nombre:name,
      apellido:lastName,
      edad:age,
      cedula:ci,
      telefono:phone,
      email:email,
      nivel_academico:academicLevel,
      dir
    })
    await teacher.save()
    return teacher
  }

  /**
   * Create/save a new teacher.
   * POST teachers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }
  async nose ({ request, response }) {
    const {photo} = request.file('photo')
    return 'photo'
  }

  /**
   * Display a single teacher.
   * GET teachers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing teacher.
   * GET teachers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update teacher details.
   * PUT or PATCH teachers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a teacher with id.
   * DELETE teachers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TeacherController
