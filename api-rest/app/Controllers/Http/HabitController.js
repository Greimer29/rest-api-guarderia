'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Habit = use('App/Models/Habit')

class HabitController {
  /**
   * Show a list of all habits.
   * GET habits
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view,auth }) {
    const user = await auth.getUser()
    return user.habits().fetch()
  }

  /**
   * Render a form to be used for creating a new habit.
   * GET habits/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view, auth }) {
    const user = await auth.getUser()
    const {
      eatalone,
      sucFinger,
      breackfastTime,
      lunchTime,
      dinnerTime,
      sleepTimenigth,
      apetitType,
      sleepType,
      sleepTimeDay,
      sleepWhit,
      sleepObjectWhit,
      favFood,
      notFavFood,
      favGame,
      favToy,
      favObject,
      gamePlace,
      urineRopeDay,
      urineRopeNight,
      popoRopeDay,
      popoRopeNight
    } = request.all()
    const habit = new Habit()
    habit.fill({
      come_solo:eatalone,
      chupa_dedo:sucFinger,
      hora_desayuna:breackfastTime,
      hora_almuerza:lunchTime,
      hora_cena:dinnerTime,
      hora_duerme_noche:sleepTimenigth,
      hora_duerme_dia:sleepTimeDay,
      tipo_sueno:sleepType,
      duerme_scompanado:sleepWhit,
      objeto_dormir:sleepObjectWhit,
      tipo_apetito:apetitType,
      comida_favorita:favFood,
      comida_no_favorita:notFavFood,
      juego_favorito:favGame,
      juguete_favorito:favToy,
      objeto_preferido:favObject,
      lugar_juego_casa:gamePlace,
      orina_ropa_dia:urineRopeDay,
      orina_ropa_noche:urineRopeNight,
      defeca_ropa_dia:popoRopeDay,
      defeca_ropa_noche:popoRopeNight,
    })
    await user.habits().save(habit)
    return habit
  }

  /**
   * Create/save a new habit.
   * POST habits
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single habit.
   * GET habits/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing habit.
   * GET habits/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update habit details.
   * PUT or PATCH habits/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a habit with id.
   * DELETE habits/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = HabitController
