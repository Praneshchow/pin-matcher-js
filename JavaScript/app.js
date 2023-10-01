
// This function is a recursive function. 
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        console.log('pin not found', pin);
        return getPin();
    }
}

// creating random digit. 
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});
