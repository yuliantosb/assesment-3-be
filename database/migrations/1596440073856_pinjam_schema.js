'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PinjamSchema extends Schema {
  up () {
    this.create('pinjams', (table) => {
      table.increments()
      table.integer('buku_id');
      table.timestamps()
    })
  }

  down () {
    this.drop('pinjams')
  }
}

module.exports = PinjamSchema
