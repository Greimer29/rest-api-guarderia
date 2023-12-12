'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RespFinanSchema extends Schema {
  up () {
    this.create('resp_finans', (table) => {
      table.increments()
      table.text('foto')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('nombre',45)
      table.string('segundo_nombre',45)
      table.string('apellido',45)
      table.string('segundo_apellido',45)
      table.integer('edad')
      table.string('cedula',10)
      table.string('nacionalidad',25)
      table.string('dir_habitacion',50)
      table.string('telefono',15)
      table.string('nivel_academico',100)
      table.string('situacion_laboral',100)
      table.string('profesion',100)
      table.string('ocupacion_actual',100)
      table.string('lugar_trabajo',100)
      table.string('telefono_trabajo',15)
      table.timestamps()
    })
  }

  down () {
    this.drop('resp_finans')
  }
}

module.exports = RespFinanSchema
