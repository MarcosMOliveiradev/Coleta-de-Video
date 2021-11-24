const express = require('express');
const route = require('./route');
const path = require('path');
const morgan = require("morgan");
const mongoose = require('mongoose');

const server = express()

mongoose.connect('mongodb://localhost:27017/upload', {
  useNewUrlParser: true,
})

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))

server.use(morgan("dev"));

server.use(route)

server.listen(3000, () => console.log("RODANDO"))