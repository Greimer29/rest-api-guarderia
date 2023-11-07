'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MasterSchema extends Schema {
  up () {
    this.create('masters', (table) => {
      table.increments()
      table.string('ci',10).notNullable().unique()
      table.string('nombres',45)
      table.string('abpellidos',45)
      table.string('edad',3)
      table.string('telefono',12)
      table.string('correo',45)
      table.string('nivelacademico',100)
      table.string('direccion',45)
      table.string('usuario',45)
      table.timestamps()
    })
  }

  down () {
    this.drop('masters')
  }
}

module.exports = MasterSchema
