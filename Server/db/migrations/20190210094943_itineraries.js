exports.up = (knex, Promise) => {
    return knex.schema.createTable('itineraries', (table) => {
      table.increments('id').primary()
      table.string('title')
      table.integer('date')
      table.string('location')
      table.string('event')

    })
  }

exports.down = (knex, Promise) => {
return knex.schema.dropTable('itineraries')
}
