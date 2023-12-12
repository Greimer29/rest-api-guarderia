'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImportInfoSchema extends Schema {
  up () {
    this.create('import_infos', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('edad_madre_parto',10)
      table.string('edad_padre_parto',10)
      table.string('embarazo_planificado',10)
      table.string('enfermedades_madre_embarazo',225)
      table.string('complicaciones_parto',225)
      table.string('tipo_parto',45)
      table.string('nacio_bien',225)
      table.string('tipo_bebe',225)
      table.string('ayuda_hacer_cosas',225)
      table.string('desarrollo_autonomia',225)
      table.string('influencia',45)
      table.string('comportamiento_dificil',225)
      table.string('manejo_difici_comportamiento',225)
      table.string('comportamiento_agradable',225)
      table.string('manejo_agradable_comportamiento',225)
      table.timestamps()
    })
  }

  down () {
    this.drop('import_infos')
  }
}

module.exports = ImportInfoSchema
