'use strict'

const Schema = use('Schema')

class AnswersTableSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.integer('question_id').unsigned()
      table.integer('user_id').unsigned()
      table.string('title')
      table.text('detail')
      table.timestamps()
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswersTableSchema

