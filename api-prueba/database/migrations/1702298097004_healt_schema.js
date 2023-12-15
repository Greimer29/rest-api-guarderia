'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HealtSchema extends Schema {
  up () {
    this.create('healts', (table) => {
      table.increments()
      table.integer('pediatres_id').unsigned().references('id').inTable('pediatres')
      table.string('tipo_sangre',5)
      table.timestamps()
    })
  }

  down () {
    this.drop('healts')
  }
}

module.exports = HealtSchema
