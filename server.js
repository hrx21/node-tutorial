const http = require('http')
const fs = require('fs')
const _ = require('lodash');

const server = http.createServer((req, res) => {

    //lodash
    const number = _.random(0, 100)
    console.log(number)

    const welcome = _.once(() => {
        console.log('hello')
    })

    welcome();

    res.setHeader('Content-type', 'text/html')

    let path = './doc2/';
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about' :
            path += 'about.html'
            res.statusCode = 200;
            break;
        case '/about-me' : 
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        case '/about-usss' : 
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;    
        default :
            path += '404.html'
            res.statusCode = 404;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else{
            // res.write(data)
            res.end(data)
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listening port requests')
}) 