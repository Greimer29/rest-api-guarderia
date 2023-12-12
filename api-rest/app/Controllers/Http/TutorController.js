'use strict'

const Tutor = use('App/Models/Tutor')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tutors
 */
class TutorController {
  async index ({ request, response, auth }) {
    const user = await auth.getUser()
    return await user.tutors().fetch()
  }

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
    const tutor = new Tutor();
    tutor.fill({
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
      profesion:profesion,
      ocupacion_actual:actJob,
      lugar_trabajo:jobPlace,
      telefono_trabajo:jobPhone
    })
    await user.tutors().save(tutor)
    return tutor
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
    const {id} = params
    return response.json({data:id})
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = TutorController
