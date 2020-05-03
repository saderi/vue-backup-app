const mongoose = require('mongoose')

const Schema = mongoose.Schema

const fileSchema = new Schema ({
    title:{
        required: true,
        max: 50,
        type: String,
        lowercase: true
    },
    fileUrl: {
        required: true,
        max: 255,
        type: String,
        lowercase: true
    },
    fileType: {
        required: true,
        type: String,
        max: 20,
        lowercase: true
    } 
})

module.exports = mongoose.model('files', fileSchema)