const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/userHome/:user',(req,res)=>{
  const userName = req.params.user
  res.render('itinerary',{user: userName})
})

router.post('/userHome/:user',(req,res)=>{
  console.log('added')
})

router.get('/signin', (req,res)=>{
  res.render('signin')
})

router.post('/signin', (req,res)=>{
  res.send('this is signin')
})


router.get('/signup', (req,res)=>{
  res.render('signup')
})


router.post('/signin', (req,res)=>{
  res.send('this is signup')
})

module.exports = router