$(document).ready(onReady) ;

function onReady() {
    console.log('Jquery ready to rock and roll!');
    $('#addition-btn').on('click' , addInput);
    $('#minus-btn').on('click', minusInput);
    $('#multiply-btn').on('click' , multiplyInput);
    $('#divide-btn').on('click' , divideInput)
    $('#decider-btns').on('click' , ".clear-btn" , clearInput);
    $('#decider-btns').on('click' , ".equal-btn" , equalHandler);
    getHistory();
    newCalc = {};
};

    




function equalHandler(event) {
    event.preventDefault();
    
    newCalc.firstInput = $('#first-input').val();
    newCalc.secondInput = $('#second-input').val();
    
    $.ajax({
        method: 'POST',
        url: '/calculations',
        data: newCalc
    }).then(function(response){
        console.log('Success' , response);
        getHistory();
    }).catch(function(error){
        console.log('Post /calculation error' , error);
    });
}

function getHistory(){


    $.ajax({
        method: 'GET',
        url: '/history'
    }).then(function(response){
        console.log('Success' , response);
        renderToDom(response);
    }).catch(function(error){
        console.log('History error' , error)
    });
}

function renderToDom(response){
    
    $('.answers').text(`
        ${response[response.length -1].answers}

    `)
    
    $('#calc-history').empty();
    for (let i = response.length -1; i >= 0; i--){
        $('#calc-history').append(`
        <li>${response[i].firstInput}  ${response[i].operator} ${response[i].secondInput} = ${response[i].answers}</li>`
        
        )
    }

};

function addInput(event){
    event.preventDefault();
    console.log('Addition button was clicked');
    newCalc.operator = '+';
};

function minusInput(event){
    event.preventDefault();
    console.log('Minus btn was clicked');
    newCalc.operator = '-';
}

function multiplyInput(event){
    event.preventDefault();
    console.log('Multiply btn was clicked');
    newCalc.operator = '*';
};

function divideInput(event){
    event.preventDefault();
    console.log('Divide btn was clicked');
    newCalc.operator = '/';
};

function clearInput(){

    console.log('Clear button was clicked');
    $('#first-input').val('');
    $('#second-input').val('');

    // once the client clicks the clear button the answer should also clear
    $('.answers').val('');
};

