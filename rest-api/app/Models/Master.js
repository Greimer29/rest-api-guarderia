'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Master extends Model {
  static get primaryKey () {
    return 'uid'
  }
}

module.exports = Master
