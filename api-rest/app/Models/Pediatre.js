'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pediatre extends Model {
  healts() {
    return this.belongsTo('App/Models/Healt')
  }
}

module.exports = Pediatre
