var express = require('express');

var app = express();

app.all('/', (req, resp) => {
    resp.send("Express ok")
})

app.post('/contacto', (req, resp) => {
    resp.send('call POST');
    console.log('POST')
});

const server = app.listen(3000, () => {

});