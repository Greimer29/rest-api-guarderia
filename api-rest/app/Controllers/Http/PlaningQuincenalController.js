'use strict'

const PlaningQ = use('App/Models/PlaningQuincenal')

class PlaningQuincenalController {
  async index ({ request, response, view }) {
    return PlaningQ.all()
  }

  async create ({ request, response, view }) {
    const {component,objetive,aspEsp,aspEva,area,tipo} = request.all();
    const planning = new PlaningQ();
    planning.fill({
      componente:component,
      objetivo:objetive,
      aprendizajes_esperados:aspEsp,
      aspectos_evaluar:aspEva,
      area:area,
      tipo
    })
    await planning.save()
    return planning
  }

  async showPlaning ({ params,request, response, view }) {
    const {id} = params;
    const planning = await PlaningQ.query().where('tipo',id).fetch()
    return planning
  }
}

module.exports = PlaningQuincenalController
