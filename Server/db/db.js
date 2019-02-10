const development = require('../../knexfile').development
const db = require('knex')(development)

module.exports={
    getUserData,
    signUp,
    addUserProfile
}

function getUserData(userName){
   return db('users')
    .join('itineraries','users.username', 'itineraries.user')
    .where('username', userName)
    .select()
    .first()
}

function signUp(newUser,newPW,newEmail){
    return db('users')
    .insert({username: newUser, password: newPW, email: newEmail})
}

function addUserProfile(newUser){
    return db('itineraries')
    .insert({user: newUser})
}