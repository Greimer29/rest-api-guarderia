'use strict'

const PlaningQ = use('App/Models/PlaningQuincenal')

class PlaningQuincenalController {
  async index ({ request, response, view }) {
    return PlaningQ.all()
  }

  async create ({ request, response, view }) {
    const {day,activity} = request.all();
    const planning = new PlaningQ();
    planning.fill({
      dia:day,
      actividad:activity
    })
    await planning.save()
    return planning
  }
}

module.exports = PlaningQuincenalController
