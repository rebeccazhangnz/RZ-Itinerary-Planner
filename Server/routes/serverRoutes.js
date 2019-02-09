const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/userHome/:user', (req, res) => {
  let userName = req.params.user
  let data = {
    user: userName,
    title: 'testing Trip',
    email: `${userName}@travelpod.com`,
    info: [
      { date: '20190304', location: 'Auckland', event: 'SkyTower' },
      { date: '20190305', location: 'Rotorua', event: 'Zipline' },
      { date: '20190306', location: 'Taupo', event: 'Huka Falls' }
    ]
  }
  res.render('itinerary', data)
})

router.post('/userHome/:user', (req, res) => {
  console.log('added')
})

router.get('/signin', (req, res) => {
  res.render('signin')
})

router.post('/signin', (req, res) => {
  res.send('this is signin')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signin', (req, res) => {
  res.send('this is signup')
})

module.exports = router
