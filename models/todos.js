const {Schema, model} = require('mongoose')

const todoSchema = new Schema({
    item: String
})

module.exports = model('ToDo', todoSchema)