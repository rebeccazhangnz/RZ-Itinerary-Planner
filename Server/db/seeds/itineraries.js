
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('itineraries').del()
    .then(function () {
      // Inserts seed entries
      return knex('itineraries').insert([
        {id: 1, title:"Bali Vocation" , date: 20190308, location: 'Suluban Beach', event: 'Water sports'},
        {id: 2, title:"Round the Island" , date: 20190611, location: 'auckland', event: 'biking'},
        {id: 3, title:"The unknown adventure", date: 20190523, location: 'nowhere', event: 'Meeting with alients' },
        {id: 4, title:"Bali Vocation", date: 20190309, location: 'Tirtha Empul Water Temple', event: 'Day Tour' },
        {id: 5, title:"Bali Vocation", date: 20190310, location: 'Campuhan Ridge', event: 'Scenic Walk' },
        {id: 6, title:"Bali Vocation", date: 20190310, location: 'nowhere', event: 'Meeting with alients' }
      ]);
    });
};
