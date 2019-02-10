const development = require('../../knexfile').development
const db = require('knex')(development)

module.exports={
    getUserData,
    signUp,
    addUserProfile,
    getItineraries,
    getEvents
}

function getUserData(userName){
   return db('users')
    .where('username', userName)
    .select()
    .first()
}

function signUp(newUser,newPW,newEmail){
    return db('users')
    .insert({username: newUser, password: newPW, email: newEmail})
}

function addUserProfile(newUser){
    return db('itineraryList')
    .insert({user: newUser})
}

function getItineraries(username){
    return db('itineraryList')
    .where('user', username)
    .select('title')
}

function getEvents(title){
    return db('itineraries')
    .where('title',title)
    .orderBy('date')
}