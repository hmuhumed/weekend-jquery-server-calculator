$(document).ready(onReady) ;

function onReady() {
    console.log('Jquery ready to rock and roll!');
    $('#addition-btn').on('click' , addInput)
    $('#decider-btns').on('click' , ".clear-btn" , clearInput);
    $('#decider-btns').on('click' , ".equal-btn" , equalHandler);

    newCalc = {}
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
        // getAnswer();
    }).catch(function(error){
        console.log('Post /calculation error' , error);
    });
}

function addInput(){
    newCalc.operator = '+';
}



function clearInput(){

};

