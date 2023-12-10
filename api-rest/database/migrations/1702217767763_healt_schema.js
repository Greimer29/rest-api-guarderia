'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HealtSchema extends Schema {
  up () {
    this.create('healts', (table) => {
      table.increments()
      table.integer('pediatre_id').unsigned().references('id').inTable('pediatres')
      table.string('tipo_sangre')
      table.string('enfermedades_padecidas')
      table.string('vacunas_recibidas')
      table.string('hospitalizado_causa')
      table.string('lesiones_presentadas')
      table.string('alergias')
      table.string('limitaciones')
      table.string('atendido_especialista')
      table.string('medicamentos_fiebre')
      table.string('enfermo_facilidad')
      table.timestamps()
    })
  }

  down () {
    this.drop('healts')
  }
}

module.exports = HealtSchema
