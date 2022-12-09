const express = require('express')

const app = express()

app.set('view engine', 'ejs')

//lidtening requests
app.listen(3000)

app.get('/', (req, res) => {
    // res.send('<p>Homepage</p>')
    // res.sendFile('./doc2/index.ejs', {root: __dirname})
    res.render('index' ,{title:'page'})
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