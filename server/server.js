const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;



// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// making my port listen
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
})

// this step of body-parser before the get and post routes
app.use(bodyParser.urlencoded({extended:true}))

app.get('/input', function(req , res){
    console.log('Request for /input was made')
    res.send(req.body);

});

app.post('/input' , function(req , res){
    console.log('POST some data: ' , req.body)
    res.sendStatus(201);

});