'use strict';
const express = require('express')
const app = express()
// const path = require('path')
// const pug = require('pug');
const port = 3000

app.use(express.static('public'))
app.set('view engine', 'pug')
// app.set('views', './views')
// app.set('vies', path.join(__dirname,'views'))
// Compile the source code
// const compiledFunction = pug.compileFile('./public/template.pug');

//Serving static file in Express using directory
// app.use(express.static('public'))

//Accessing the content of public folder
app.get('/', function (req, res) {
    res.render('template', {name: 'kittttty'})
})

//getting the json response
// app.get('/catinfo', (req, res) => {
//     const cat = {
//         name: 'Frank',
//         age: 6,
//         weight: 5,
//     };
//     res.json(cat);
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})