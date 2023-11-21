'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PediatreSchema extends Schema {
  up () {
    this.create('pediatres', (table) => {
      table.increments()
      table.string('nombre',45)
      table.string('apellido',45)
      table.string('telefono',12)
      table.string('lugar_trabajo',50)
      table.timestamps()
    })
  }

  down () {
    this.drop('pediatres')
  }
}

module.exports = PediatreSchema
