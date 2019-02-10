
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('itineraryList').del()
    .then(function () {
      // Inserts seed entries
      return knex('itineraryList').insert([
        {id: 1, user: 'Bill' , title: 'Bali Vocation'},
        {id: 2, user: 'Bill', title: 'Amazon Adventure'},
        {id: 3, user: 'Bill', title: 'Lost in Madagasca'}
      ]);
    });
};
