'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaningQuincenalSchema extends Schema {
  up () {
    this.create('planing_quincenals', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('componente',45)
      table.string('objetivo',45)
      table.string('aprendizajes_esperados',225)
      table.string('aspectos_evaluar',225)
      table.string('area',45)
      table.timestamps()
    })
  }

  down () {
    this.drop('planing_quincenals')
  }
  //cualquiera puede programar
  //pero no cualquiera puede ser un gran programador
  //pero un gran programador... puede ser cualquiera.
}

module.exports = PlaningQuincenalSchema
