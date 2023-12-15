'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PediatreSchema extends Schema {
  up () {
    this.create('pediatres', (table) => {
      table.increments()
      table.string('nombre')
      table.timestamps()
    })
  }

  down () {
    this.drop('pediatres')
  }
}

module.exports = PediatreSchema
