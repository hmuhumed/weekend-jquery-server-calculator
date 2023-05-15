const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 5000;

let inputData = [];

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// making my port listen
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
});

// this step of body-parser before the get and post routes
app.use(bodyParser.urlencoded({extended:true}))

app.post('/calculations' , function(req , res){
    console.log('req.body for Post /calculation' , req.body)

    let calculation = calculateNumbers(req.body)
    
    req.body.answers = calculation
    console.log(calculation)
    res.sendStatus(201)

    inputData.push(req.body);
});

function calculateNumbers(numbers) {
    console.log('Function calculateNumbers was used!' , numbers);
    let answers = 0 ;

    let firstNumber = parseInt(numbers.firstInput)
    let secondNumber = parseInt(numbers.secondInput)

    if(numbers.operator == '+'){
        answers = (firstNumber * 1) + (secondNumber * 1);
        console.log(answers)
        return answers;
        
    } if(numbers.operator == '-'){
        answers = firstNumber - secondNumber
        return answers;
    } if(numbers.operator == '*') {
        answers = firstNumber * secondNumber;
        return answers;
    } if(numbers.operator == '/') {
        answers = firstNumber / secondNumber;
        return answers;
    };
    
};

app.get('/history' , function(req , res){
    console.log('Request for /history was made');

    res.send(inputData);
});