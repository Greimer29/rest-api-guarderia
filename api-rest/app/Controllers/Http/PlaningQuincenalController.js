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

  async update ({params,request,response}) {
    const {id} = params;
    const {day,activity} = request.all();
    const quincenalP = await PlaningQ.find(id)
    quincenalP.merge({
      dia:day,
      actividad:activity
    })
    await quincenalP.save()
    return response.json({data:quincenalP})
  }

  async destroy ({ params, request, response }) {
    const {id} = params;
    const quincenal = await PlaningQ.find(id)
    await quincenal.delete()
    return quincenal

  }
}

module.exports = PlaningQuincenalController
