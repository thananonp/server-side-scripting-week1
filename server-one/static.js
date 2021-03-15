'use strict';
const express = require('express')
const app = express()
const port = 3000

//Serving static file in Express using directory
app.use(express.static('public'))

//Accessing the content of public folder
app.get('/', (req, res) => {
    // res.send('Hello World!')
})

//getting the json response
app.get('/catinfo', (req, res) => {
    const cat = {
        name: 'Frank',
        age: 6,
        weight: 5,
    };
    res.json(cat);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})