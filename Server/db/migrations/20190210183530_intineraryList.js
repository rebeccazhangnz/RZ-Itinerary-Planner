exports.up = (knex, Promise) => {
    return knex.schema.createTable('itineraryList', (table) => {
      table.increments('id').primary()
      table.string('user')
      table.string('title')
    })
  }

exports.down = (knex, Promise) => {
return knex.schema.dropTable('itineraryList')
}