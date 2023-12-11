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

  async create ({request}) {
    const user = await auth.getUser()
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
    const father = new Father();
    father.fill({
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
    await user.fathers().save(father)
    return father
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = TutorController
