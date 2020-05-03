const express = require('express')
const mongoose = require('mongoose')

const { PORT, CONNECTION_STRING } = require('./config')
const FileRouter = require('./modules/files/FileRouter')

const app = express()
app.use('/files/', FileRouter)
    
mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true}).then(
     connected => { app.listen(PORT, () => console.log(`server running on ${PORT}`)) },
     err => { console.log('connection error')}     
     )

