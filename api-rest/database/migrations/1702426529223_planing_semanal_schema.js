'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaningSemanalSchema extends Schema {
  up () {
    this.create('planing_semanals', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('dia',15)
      table.string('actividad',225)
      table.timestamps()
    })
  }

  down () {
    this.drop('planing_semanals')
  }
}

module.exports = PlaningSemanalSchema
