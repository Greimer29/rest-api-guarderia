'use strict'

const PlanningS = use('App/Models/PlaningSemanal')

class PlaningSemanalController {

  async index ({ request, response, view }) {
    return PlanningS.all()
  }

  async create ({ request, response, view }) {
    const {day,activity} = request.all();
    const planning = new PlanningS();
    planning.fill({
      dia:day,
      actividad:activity
    })
    await planning.save()
    return planning
  }

  async destroy ({ params, request, response }) {
    const {id} = params;
    const itemPlaning = await PlanningS.find(id)
    await itemPlaning.delete()
    return itemPlaning

  }

  async update ({params,request,response}) {
    const {id} = params;
    const {day,activity} = request.all();
    const semanalP = await PlanningS.find(id)
    semanalP.merge({
      dia:day,
      actividad:activity
    })
    await semanalP.save()
    return response.json({data:semanalP})
  }
}

module.exports = PlaningSemanalController
