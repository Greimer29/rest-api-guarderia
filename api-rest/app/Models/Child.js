'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Child extends Model {
  fathers () {
    return this.hasMany('App/Models/Father')
  }
}

module.exports = Child
