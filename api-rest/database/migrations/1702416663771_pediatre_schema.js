'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PediatreSchema extends Schema {
  up () {
    this.create('pediatres', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('nombre',45)
      table.string('apellido',45)
      table.string('telefono',45)
      table.string('lugar_trabajo',45)
      table.timestamps()
    })
  }

  down () {
    this.drop('pediatres')
  }
}

module.exports = PediatreSchema
