const development = require('../../knexfile').development
const db = require('knex')(development)

module.exports={
    getUserData,
    signUp,
    addUserProfile,
    getItineraries,
    getEvents,
    addNewTitle,
    addNewEvent,
    deleteEvent,
    deleteItinerary,
    getPW
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
    .select()
}

function getEvents(title){
    return db('itineraries')
    .join('itineraryList', 'itineraries.title', 'itineraryList.title')
    .where('itineraries.title',title)
    .orderBy('date')
}

function addNewTitle(username,newTitle){
    return db('itineraryList')
    .insert({user: username, title: newTitle})
}

function addNewEvent(newEventInfo) {
    return db('itineraries').insert({
      title: newEventInfo.title,
      date: newEventInfo.date,
      location: newEventInfo.location,
      event: newEventInfo.event
    })
  }

function deleteEvent(event){
    return db('itineraries')
    .where('event', event|undefined|''|null|'undefined')
    .del()
}

function deleteItinerary(title){
    return db('itineraryList')
    .where('title', title|undefined|''|null|'undefined')
    .del()
}

function getPW(username){
    return db('users')
    .where('username', username)
    .select('password')
    .first()
}

