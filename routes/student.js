const express = require('express')
const router = express.Router()
const student = require('../models/student')
const bcrypt = require('bcrypt')

router.route('/signup')
  .get(req, res) => {
    res.render("student/signup.ejs")
  })
  .post(async (req, res) => {
    try {
      const hashedPassword = bcrypt.hash(req.body.password, 10);
      const user = { collegeId: req.body.collegeId, password: hashedPassword };
      student.insertMany([user]);
      res.status(201).send("Sign In Successful");
    } catch {
      res.status(500).send();
    }
  })

router.route('/login')
  .get((req, res) => {
    res.render("student/login.ejs")
  })
  .post(async (req, res) => {
    // const user = student.find({collegeId: req.body.name})
    const user = student.find(user => user.collegeId === req.body.collegeId)
    if (user == null) {
      return res.status(400).send('Cannot find user')
    }
    try {
      if(await bcrypt.compare(req.body.password, user.password)) {
        res.send('Login Successful')
      } else {
        res.send('Not Allowed')
      }
    } catch {
      res.status(500).send()
    }
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

module.exports = router
