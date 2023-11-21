'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HealtsSchema extends Schema {
  up () {
    this.create('healts', (table) => {
      table.increments()
      table.integer('pediatre_id').unsigned().references('id').inTable('pediatres')
      table.string('grupo_sanguineo',20)
      table.string('factor_sanguineo',20)
      table.string('enfermedades_padecidas',200)
      table.string('vacunas_recibidas',200)
      table.string('lesiones_presentadas',200)
      table.string('alergias',100)
      table.string('limitaciones',200)
      table.string('medicamentos_fiebre',200)
      table.timestamps()
    })
  }

  down () {
    this.drop('healts')
  }
}

module.exports = HealtsSchema
