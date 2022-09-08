const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

//Start App
const app = express()

//Import Models
const Scheduling = require('./models/Scheduling')
const User = require('./models/User')

//Database connection
const DBconnetion = require('./db/DBconnetion')
DBconnetion
          .sync()
          .then(() => {app.listen(3000)})
          .catch((error) => {error})



