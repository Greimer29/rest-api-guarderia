'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaningSemanalSchema extends Schema {
  up () {
    this.create('planing_semanals', (table) => {
      table.increments()
      table.string('dia',10)
      table.string('actividad',225)
      table.timestamps()
    })
  }

  down () {
    this.drop('planing_semanals')
  }
}

module.exports = PlaningSemanalSchema
