const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

let inputData = [];

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// making my port listen
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
})

// this step of body-parser before the get and post routes
app.use(bodyParser.urlencoded({extended:true}))

app.post('/calculation' , function(req , res){
    console.log('req.body for Post /calculation' , req.body)

    let calculation = calculateNumbers(req.body)
    
    
})

function calculateNumbers(numbers) {
    console.log('Function calculateNumbers was used!' , numbers);
    let answers = 0 ;

    
}