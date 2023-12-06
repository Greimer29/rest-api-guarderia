'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlanningSchema extends Schema {
  up () {
    this.create('plannings', (table) => {
      table.increments()
      table.string('tipo')
      table.string('fecha_inicio')
      table.string('fecha_final')
      table.timestamps()
    })
  }

  down () {
    this.drop('plannings')
  }
}

module.exports = PlanningSchema
