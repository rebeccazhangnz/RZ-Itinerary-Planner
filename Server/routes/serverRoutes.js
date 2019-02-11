const express = require('express')
const router = express.Router()
const db = require('../db/db')

// router.get('/',(req,res)=>{
//   db.getEvents('Bali Vocation')
//     .then(console.log)
// })



router.get('/', (req, res) => {
  res.render('index')
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
        db.getEvents(title)
        .then(events => {
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
  db.addNewTitle(username, newTitle)
     .then(() =>
    res.redirect(`/userHome/${username}`))
    .catch(err => {
      res.status(500).send('Fail to load the Page')
    })
})


router.post('/userHome/:user/:title', (req, res) => {
  const newEventInfo = req.body
  
  db.addNewEvent(newEventInfo)
     .then(() =>
      res.redirect(`/userHome/${newEventInfo.user}/${newEventInfo.title}`))
    .catch(err => {
      res.status(500).send('Fail to load the Page')
    })
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', (req, res) => {
  const newUser = req.body.username
  const newPassword = req.body.userPW
  const newEmail = req.body.userEmail
  db.signUp(newUser, newPassword, newEmail)
    .then(() => res.redirect('/signin'))
    .catch(err => {
      res.status(500).send('Fail to load the Page')
    })
})

router.get('/signin', (req, res) => {
  res.render('signin')
})

router.post('/signin', (req, res) => {
  const user = req.body.username
  res.redirect(`/userHome/${user}`)
})



module.exports = router
