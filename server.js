const express = require('express');
const app = express();
const PORT = 8080;

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.send("not complete")
})

app.use(express.static("public"))

const studentRouter = require('./routes/students')
app.use('/students', studentRouter)

app.listen(PORT,
  () => console.log(`it's alive on http://localhost:${PORT}`)
)
