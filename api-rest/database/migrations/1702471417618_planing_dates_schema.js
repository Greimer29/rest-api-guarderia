'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaningDatesSchema extends Schema {
  up () {
    this.create('planing_dates', (table) => {
      table.increments()
      table.string('fecha_inicio')
      table.string('fecha_final')
      table.string('tipo')
      table.timestamps()
    })
  }

  down () {
    this.drop('planing_dates')
  }
}

module.exports = PlaningDatesSchema
