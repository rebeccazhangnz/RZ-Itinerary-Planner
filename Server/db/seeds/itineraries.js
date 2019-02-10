
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('itineraries').del()
    .then(function () {
      // Inserts seed entries
      return knex('itineraries').insert([
        {id: 1, user: 'Bill', title:"Bali Vocation" , date: 20190308, location: 'Bali', event: 'water sports'},
        {id: 2, user: 'Elizabeth',title:"Round the Island" , date: 20190611, location: 'auckland', event: 'biking'},
        {id: 3, user: 'Rolf', title:"The unknown adventure", date: 20190523, location: 'nowhere', event: 'meeting with alients' }
      ]);
    });
};
