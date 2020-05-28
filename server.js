////Dependencies////
const express = require('express')
const mongoose = require('mongoose')
const methodOverrive = require('method-override')
const app = express()
const port = 3000
const ToDo = require('./models/todos.js')
MONGODB_URI = "mongodb://heroku_h923hvtf:jopquflt0lg6dog73spbo6i1dp@ds111562.mlab.com:11562/heroku_h923hvtf"

////Middleware////
app.use(express.urlencoded({extended: false}))
app.use(methodOverrive('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
mongoose.connect(MONGODB_URI || "mongodb://localhost:27017/todos", {useUnifiedTopology: true, useFindAndModify: true, useNewUrlParser: true})



////Index Route////
app.get('/todos', (req, res) => {
    ToDo.find({}, (err, allToDos)=> {
        console.log(allToDos)
        if(err) {
            console.log(err)
        } else {
            res.render('Index', {
                todo: allToDos
            })
        }
    })
})
////Reroot Route////
app.get('/' , (req, res) => {
    res.redirect('/todos');
  });

////Create Route////
app.post('/todos', (req, res) => {
    ToDo.create(req.body, (err, foundToDo) => {
        if(err) {
            console.log(err)
        } else {
            res.redirect('/todos')
        }
    })
})

////Delete Route////
app.delete('/todos', (req, res)=> {
    ToDo.findByIdAndDelete(req.params.id, (err, foundToDo)=> {
        res.redirect('/todos')
    })
})
////Listener////
app.listen(3000, (req, res)=> {
    console.log("Get ready to do stuff!")
})