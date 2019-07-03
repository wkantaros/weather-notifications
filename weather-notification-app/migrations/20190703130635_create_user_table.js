
exports.up = function(knex) {
    return knex.schema.createTable('user', function (t) {
        t.increments('id').primary();
        t.string('phone_number').notNullable();
        t.string('zip_code').notNullable();
        t.timestamps(false, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user');
};
