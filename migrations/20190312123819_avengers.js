
exports.up = function(knex, Promise) {
  return knex.schema.createTable('avengers', tbl => {
      tbl.increments()

      tbl
        .string('name', 128)
        .notNullable()
        .unique()

      tbl
        .integer('power_level')
        .unsigned()
        .notNullable()

    
      tbl.text('catchphrase')
      tbl.string('random')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('avengers')
};
