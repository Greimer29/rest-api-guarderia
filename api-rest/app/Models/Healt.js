'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Healt extends Model {
  pediatres () {
    return this.hasMany('App/Models/Pediatre')
  }
}

module.exports = Healt
