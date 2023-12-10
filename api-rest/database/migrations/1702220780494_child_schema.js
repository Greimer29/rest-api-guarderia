'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChildSchema extends Schema {
  up () {
    this.create('children', (table) => {
      table.increments()
      table.text('foto')
      table.string('nombre',45).notNull()
      table.string('segundo_nombre',45).notNull()
      table.string('apellido',45).notNull()
      table.string('segundo_apellido',45).notNull()
      table.string('sexo',15).notNull()
      table.integer('edad').notNull()
      table.string('cedula',10).notNull()
      table.string('nacionalidad',25).notNull()
      table.string('estado_civil',25).notNull()
      table.string('dir_habitacion',50).notNull()
      table.string('telefono',15).notNull()
      table.string('nivel_academico',100).notNull()
      table.string('situacion_laboral',100).notNull()
      table.string('profesion',100).notNull()
      table.string('lugar_trabajo',100).notNull()
      table.string('telefono_trabajo',15).notNull()
      table.timestamps()
    })
  }

  down () {
    this.drop('children')
  }
}

module.exports = ChildSchema
