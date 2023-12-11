'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChildSchema extends Schema {
  up () {
    this.create('children', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('primer_apellido',45)
      table.string('segundo_apellido',45)
      table.string('primer_nombre',45)
      table.string('segundo_nombre',45)
      table.integer('edad')
      table.string('sexo',10)
      table.string('nacionalidad',15)
      table.string('procedencia',15)
      table.string('pais')
      table.string('estado')
      table.string('ciudad')
      table.integer('cantidad_hermanos')
      table.integer('lugar_hermanos')
      table.string('talla_camisa')
      table.string('talla_pantalon')
      table.string('talla_zapato')
      table.string('peso')
      table.string('modalidad')
      table.string('turno')
      table.timestamps()
    })
  }

  down () {
    this.drop('children')
  }
}

module.exports = ChildSchema
