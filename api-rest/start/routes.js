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
  //padres
  Route.get('padre','PadreController.index')
  Route.post('padre','PadreController.create')
  Route.patch('padre/:id','PadreController.update')
  Route.delete('padre/:id','PadreController.destroy')
  //pediatra
  Route.get('pediatre','PediatreController.index')
  Route.post('pediatre','PediatreController.create')
  Route.patch('pediatre/:id','PediatreController.update')
  Route.delete('pediatre/:id','PediatreController.destroy')
  //teacher
  Route.get('teachers','TeacherController.index')
  Route.post('teachers','TeacherController.create')
  Route.patch('pediatre/:id','PediatreController.update')
  Route.delete('pediatre/:id','PediatreController.destroy')

  Route.get('planning','PlanningController.index')
  Route.post('planning','PlanningController.create')
  //Planificacion quincenal
  Route.get('planning/quincenal','TeacherController.index')
  Route.post('planning/quincenal','TeacherController.create')
  Route.patch('planning/quincenal/:id','PediatreController.update')
  Route.delete('planning/quincenal/:id','PediatreController.destroy')
  //Planificacion semanal
  Route.get('planning/semanal','PlaningSemanalController.index')
  Route.post('planning/semanal','PlaningSemanalController.create')
  Route.patch('planning/semanal/:id','PlaningSemanalController.update')
  Route.delete('planning/semanal/:id','PlaningSemanalController.destroy')
}).prefix('api/v1')
