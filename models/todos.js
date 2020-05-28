const {Schema, model} = require('mongoose')

const todoSchema = new Schema({
    item: String,
    done: Boolean
})

module.exports = model('ToDo', todoSchema)