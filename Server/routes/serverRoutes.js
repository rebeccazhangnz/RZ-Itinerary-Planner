const express = require('express')
const router = express()
const request = require('superagent')
//const router = express.Router()
const db = require('../db/db')
var methodOverride = require('method-override')
router.use(methodOverride('_method'))

router.get('/', (req, res) => {
  res.status(202).render('index')
})

router.get('/userHome/:user', (req, res) => {
  let username = req.params.user
  db.getUserData(username)
    .then(userDetails => {
      db.getItineraries(userDetails.username).then(itineraryList => {
        res.render('itinerary', { user: userDetails, list: itineraryList })
      })
    })
    .catch(err => {
      res.status(500).send('Fail to load the Page')
    })
})

router.get('/userHome/:user/:title', (req, res) => {
  const userName = req.params.user
  const title = req.params.title
  db.getUserData(userName)
    .then(userDetails => {
      db.getItineraries(userDetails.username).then(itineraryList => {
        db.getEvents(title).then(events => {
          res.render('itinerary', {
            user: userDetails,
            list: itineraryList,
            title: title,
            events: events
          })
        })
      })
    })
    .catch(err => {
      res.status(500).send('Fail to load the Page')
    })
})

router.post('/userHome/:user', (req, res) => {
  const username = req.body.user
  const newTitle = req.body.itineraryTitle
  if(req.body.city==='y'){
    request
    .get(
      `api.openweathermap.org/data/2.5/weather?q=${req.body.location}&APPID=71b3d4084f471b95a805aacfd13ff61d&units=metric`
    )
    .then(data => {
      data = {
        city: data.body.name,
        weather: data.body.weather[0].main,
        description: data.body.weather[0].description,
        icon: data.body.weather[0].icon,
        degree: data.body.main.temp
      }
      //res.render('itinerary', data)
      return data
    }).then((data)=>{
      db.getUserData(username)
        .then(userDetails => {
            db.getItineraries(userDetails.username).then(itineraryList => {
        res.render('itinerary', { user: userDetails, list: itineraryList, weather: data })
      })
    })
    })
  }else if (req.body.deleteEvent) {
    db.deleteEvent(req.body.deleteEvent).then(() =>
      res.redirect(`/userHome/${req.body.user}`)
    )}
  else{
  db.addNewTitle(username, newTitle)
    .then(() => res.redirect(`/userHome/${username}`))
    .catch(err => {
      res.status(500).send('Fail to load the Page')
    })
}})

router.post('/userHome/:user/:title', (req, res) => {
  const newEventInfo = req.body
  const userName = req.body.user
  const title = req.body.title

  if (req.body.deleteEvent) {
    db.deleteEvent(req.body.deleteEvent).then(() =>
      res.redirect(`/userHome/${req.body.user}/${req.body.title}`)
    )
  }else if(req.body.city ==='y'){
    request
    .get(
      `api.openweathermap.org/data/2.5/weather?q=${req.body.location}&APPID=71b3d4084f471b95a805aacfd13ff61d&units=metric`
    )
    .then(data => {
      data = {
        city: data.body.name,
        weather: data.body.weather[0].main,
        description: data.body.weather[0].description,
        icon: data.body.weather[0].icon,
        degree: data.body.main.temp
      }

      return data
    })
    .then((data)=>{
      db.getUserData(userName)
      .then(userDetails => {
        db.getItineraries(userDetails.username).then(itineraryList => {
          db.getEvents(title).then(events => {
            res.render('itinerary', {
              user: userDetails,
              list: itineraryList,
              title: title,
              events: events,
              weather: data
            })
          })
        })
      })
    })
  } else if (req.body.deleteItry) {
    db.deleteItinerary(req.body.deleteItry).then(() =>
       res.redirect(`/userHome/${req.body.user}`)
      
    )
  } else {
    db.addNewEvent(newEventInfo)
      .then(() =>
        res.redirect(`/userHome/${newEventInfo.user}/${newEventInfo.title}`)
      )
      .catch(err => {
        res.status(500).send('Fail to load the Page')
      })
  }
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', (req, res) => {
  const newUser = req.body.username
  const newPassword = req.body.userPW
  const confirmedPW = req.body.confirmUserPW
  const newEmail = req.body.userEmail

  db.getPW(newUser).then(existingUser => {
    if (
      (newUser === '') |
      (newPassword === '') |
      (confirmedPW === '') |
      (newEmail === '')
    ) {
      res.render('signup', {
        validation: '*Input should not be empty, please fill out all fields.'
      })
    } else if (existingUser !== undefined) {
      res.render('signup', {
        validation: '*Username already exists.'
      })
    } else if (newPassword !== confirmedPW) {
      res.render('signup', {
        validation: '*Password not match, please check again.'
      })
    } else if (dfads) {
      afsdfa
    } else {
      db.signUp(newUser, newPassword, newEmail)
        .then(() => res.redirect('/signin'))
        .catch(err => {
          res.status(500).send('Fail to load the Page')
        })
    }
  })
})

router.get('/signin', (req, res) => {
  res.render('signin')
})

router.post('/signin', (req, res) => {
  const username = req.body.username
  const password = req.body.userPW

  db.getPW(username).then(PW => {
    if ((username === '') | (password === '')) {
      res.render('signin', {
        validation: '*Username and Password must not be empty'
      })
    } else if (PW == undefined) {
      res.render('signin', { validation: '*User not found' })
    } else if (PW.password !== password) {
      res.render('signin', { validation: '*Incorrect username or password' })
    } else {
      res.redirect(`/userHome/${username}`)
    }
  })
})

module.exports = router
