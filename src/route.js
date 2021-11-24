const { Router } = require('express')
const express = require('express')
const RoomController = require('./controllers/RoomController')

/////////////// multer //////////////////
const multer = require('multer')
const multerconfig = require('./config/multer')
const Post = require("./controllers/Post")
///////// multer final //////////

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page:'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page:'create-pass'}))
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

///////////////////// teste com multer ////////////////////////
// route.post('/poste', multer(multerconfig).single('file'), (req, res) => res.render("poste", {page:'poste'}))
route.post("/poste", multer(multerconfig).single("file"), async (req, res) => {
  const { originalname: name, size, filename: key } = req.file;
  const post = await Post.create({
    name,
    size,
    key,
    url: '',
  })
  return res.json(post);
})


/////////////////////// Formato que o formulario de dentro da modal tem que passar a informação  ///////////////////////////
 route.post('/creat-room', RoomController.create)

module.exports = route