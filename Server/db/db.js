const development = require('../../knexfile').development
const db = require('knex')(development)

module.exports={
    getUserData
}

function getUserData(userName){
   return db('users')
    .join('itineraries','users.username', 'itineraries.user')
    .where('username', userName)
    .select()
    .first()
}