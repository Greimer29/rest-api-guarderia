'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MyChildSchema extends Schema {
  up () {
    this.create('my_children', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('my_children')
  }
}

module.exports = MyChildSchema
