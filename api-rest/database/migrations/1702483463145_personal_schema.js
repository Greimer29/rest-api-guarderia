'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonalSchema extends Schema {
  up () {
    this.create('personals', (table) => {
      table.increments()
      table.binary('foto')
      table.string('cedula',10)
      table.string('nombre',50)
      table.string('apellido',50)
      table.string('edad')
      table.string('telefono',15)
      table.string('email',225)
      table.string('nivel_academico',225)
      table.string('dir',225)
      table.timestamps()
    })
  }

  down () {
    this.drop('personals')
  }
}

module.exports = PersonalSchema
