'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(()=>{
  //users
  Route.get('users','UserController.index')
  Route.post('users/register','UserController.create')
  Route.post('users/login','UserController.login')
  Route.patch('users/:id','UserController.update')
  Route.delete('users/:id','UserController.destroy')
  //ninos
  Route.get('child','ChildController.index')
  Route.post('child','ChildController.create')
  Route.patch('child/:id','ChildController.update')
  Route.delete('child/:id','ChildController.destroy')
  //padres
  Route.get('fathers','FatherController.index')
  Route.post('fathers','FatherController.create')
  Route.patch('fathers/:id','FatherController.update')
  Route.delete('fathers/:id','FatherController.destroy')
  //Tutor
  Route.get('tutor','TutorController.index')
  Route.post('tutor','TutorController.create')
  Route.patch('tutor/:id','TutorController.update')
  Route.delete('tutor/:id','TutorController.destroy')
  //Responsable Financiero
  Route.get('respfinan','RespFinanController.index')
  Route.post('respfinan','RespFinanController.create')
  Route.patch('respfinan/:id','RespFinanController.update')
  Route.delete('respfinan/:id','RespFinanController.destroy')
  //pediatra
  Route.get('pediatre','PediatreController.index')
  Route.post('pediatre','PediatreController.create')
  Route.patch('pediatre/:id','PediatreController.update')
  Route.delete('pediatre/:id','PediatreController.destroy')
  //de salud
  Route.get('healt','HealtController.index')
  Route.post('healt','HealtController.create')
  Route.patch('healt/:id','HealtController.update')
  Route.delete('healt/:id','HealtController.destroy')
  //de Habitos
  Route.get('habits','HabitController.index')
  Route.post('habits','HabitController.create')
  Route.patch('habits/:id','HabitController.update')
  Route.delete('habits/:id','HabitController.destroy')
  //teacher
  Route.get('teachers','TeacherController.index')
  Route.post('teachers','TeacherController.create')
  Route.patch('pediatre/:id','PediatreController.update')
  Route.delete('pediatre/:id','PediatreController.destroy')
  //fechas de la planificacion
  Route.get('planning','PlanningController.index')
  Route.get('planning/type/:id','PlanningController.show')
  Route.post('planning','PlanningController.create')
  Route.patch('planning/type/:id','PlanningController.update')
  //Planificacion quincenal
  Route.get('planning/quincenal','PlaningQuincenalController.index')
  Route.get('planning/quincenal/area/:id','PlaningQuincenalController.showPlaning')
  Route.post('planning/quincenal','PlaningQuincenalController.create')
  Route.patch('planning/quincenal/:id','PlaningQuincenalController.update')
  Route.delete('planning/quincenal/:id','PlaningQuincenalController.destroy')
  //Planificacion semanal
  Route.get('planning/semanal','PlaningSemanalController.index')
  Route.post('planning/semanal','PlaningSemanalController.create')
  Route.patch('planning/semanal/:id','PlaningSemanalController.update')
  Route.delete('planning/semanal/:id','PlaningSemanalController.destroy')
}).prefix('api/v1')
