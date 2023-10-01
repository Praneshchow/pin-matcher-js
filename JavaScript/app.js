
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

document.getElementById('calculator').addEventListener('click', function(){
    const number =  event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;

    if(isNaN(number)){
        console.log(number);
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');     // split the string. 
            digits.pop();              // remove a digit from last. 
            const remainingDigits = digits.join('');      // join the all string characters. 

            typedNumberField.value = remainingDigits;      // set the value into the input typed field. 
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;     // new added number.
        typedNumberField.value = newTypedNumber;
    }
})


document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');    // get the rendom number. 
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');    // get the typed number. 
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailMessage = document.getElementById('pin-failure');

    if (typedNumber === currentPin){
        pinSuccessMessage.style.display = 'block';   // show 
        pinFailMessage.style.display = 'none';       // hide
    }
    else{
        pinFailMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})
