const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('view engine', 'ejs')

//lidtening requests
app.listen(3000)

app.use(morgan('dev'))

//midddleware static files
app.use(express.static('public'))
// app.use(morgan('dev'))s


app.get('/', (req, res) => {
    const blogs = [
        {title:'Sam', snippet:'lorem ipsum lorem ipsumlorem ipsumlorem ipsum'},
        {title:'Sean', snippet:'lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum'},
        {title:'Sonny', snippet:'lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'}
    ]
    // res.render('index' ,{title:'page'})
    res.render('index', { title: 'Home', blogs }); 
})

app.get('/about', (req, res) => {
    // res.send('<p>About</p>')
    // res.sendFile('./doc2/about.ejs' , {root : __dirname})
    res.render('about') 
})
app.get('/create', (req, res) => {
    // res.send('<p>About</p>')
    // res.sendFile('./doc2/about.ejs' , {root : __dirname})
    res.render('create') 
})

// redirect
app.get('/about-us', (req,res) => {
    res.redirect('/about')
})
//404 
app.use((req, res) => {
    res.status(404).render('404')
})