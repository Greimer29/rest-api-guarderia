'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HabitsSchema extends Schema {
  up () {
    this.create('habits', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('come_solo')
      table.string('chupa_dedo')
      table.string('hora_desayuna')
      table.string('hora_almuerza')
      table.string('hora_cena')
      table.string('hora_duerme_noche')
      table.string('hora_duerme_dia')
      table.string('tipo_sueno')
      table.string('duerme_scompanado')
      table.string('objeto_dormir')
      table.string('tipo_apetito')
      table.string('comida_favorita')
      table.string('comida_no_favorita')
      table.string('juego_favorito')
      table.string('juguete_favorito')
      table.string('objeto_preferido')
      table.string('lugar_juego_casa')
      table.string('orina_ropa_dia')
      table.string('orina_ropa_noche')
      table.string('defeca_ropa_dia')
      table.string('defeca_ropa_noche')
      table.timestamps()
    })
  }

  down () {
    this.drop('habits')
  }
}

module.exports = HabitsSchema
