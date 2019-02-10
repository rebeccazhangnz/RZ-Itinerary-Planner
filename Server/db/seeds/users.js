
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Bill', password: 'abcd1234', email: 'bill.bryson@travelpod.com'},
        {id: 2, username: 'Elizabeth', password: 'efgh1234', email: 'lizG@travelpod.com'},
        {id: 3, username: 'Rolf', password: 'lovetravel', email: 'rolf_potts@travelpod.com'}
      ]);
    });
};
