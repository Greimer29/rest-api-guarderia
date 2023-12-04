'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaningQuincenalSchema extends Schema {
  up () {
    this.create('planing_quincenals', (table) => {
      table.increments()
      table.string('componente',80)
      table.string('objetivo',80)
      table.string('aprendizajes_esperados',225)
      table.string('aspectos_evaluar',225)
      table.timestamps()
    })
  }

  down () {
    this.drop('planing_quincenals')
  }
}

module.exports = PlaningQuincenalSchema