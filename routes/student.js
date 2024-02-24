const express = require('express')
const router = express.Router()
const student = require('../models/student')

router.route('/login')
  .get((req, res) => {
    res.render("student/login.ejs")
  })
  .post((req, res) => {
    res.status(201).send("login successful")
  })

router.route('/signup')
  .get((req, res) => {
    res.render("student/signup.ejs")
  })
  .post((req, res) => {
    res.status(201).send("signup successful")
  })

router.get('/', (req, res) => {
  res.send("list users")
})

router.post('/create', (req, res) => {
  res.send("create new user")
})

router.get('/get/:id', (req, res) => {
  res.send({ "user": req.params.id })
})

router.put('/update', (req, res) => {
  res.send("update user data")
})

router.delete('/delete', (req, res) => {
  res.send("delete user data")
})

// param is a middleware which works between req and res
// const users = [{ name: "Hello" }, { name: "World" }]
// router.param("id", (req, res, next, id) => {
//   req.user = users[id]
//   next()
// })

// app.post('/new', (req, res) => {
//   const { id } = req.params;
//   const { logo } = req.body;
//   if (!logo) {
//     res.status(418).send({ "message": "We need a logo" })
//   }
//   res.send({
//     "tshirt": `tshirt with your ${logo} and ID of ${id}`
//   })
//   res.render("index", { text: "world" })
// })

// res.status(200).send({
//   "name": "hello",
//   "title": "there"
// })

module.exports = router
