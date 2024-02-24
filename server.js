require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8080;

// establishing a connection between database and server
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err))

// this below line is used to enable json while sending response
app.use(express.json());
// logger is a function which shows the requsted url in console
function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}
app.use(logger);
// public is a static directory which means, the information
// present in that directory can be accessed by any user
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send("not complete")
})

const dbRouter = require('./routes/db')
const studentRouter = require('./routes/students')
app.use('/db', dbRouter)
app.use('/students', studentRouter)

app.listen(PORT,
  () => console.log(`it's alive on http://127.0.0.1:${PORT}`)
)
