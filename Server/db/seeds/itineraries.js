
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('itineraries').del()
    .then(function () {
      // Inserts seed entries
      return knex('itineraries').insert([
        {id: 1, title:"Bali Vocation" , date: 20190308, location: 'Bali', event: 'water sports'},
        {id: 2, title:"Round the Island" , date: 20190611, location: 'auckland', event: 'biking'},
        {id: 3, title:"The unknown adventure", date: 20190523, location: 'nowhere', event: 'meeting with alients' },
        {id: 4, title:"Bali Vocation", date: 20190308, location: 'Bali', event: 'Spa' }
      ]);
    });
};
