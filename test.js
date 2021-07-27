// splash screen
const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 3000);
})


var keys = document.querySelectorAll('#calculator span');

var operators = ['+', '-', 'x', '÷', '^'];

var decimalAdded = false;

// looping through all keys
for(var i = 0; i < keys.length; i++) {
  
	keys[i].onclick = function(e) {

		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
    
		
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		
		else if(btnVal == '=') {
			var equation = inputVal; 
			var lastChar = equation[equation.length - 1]; 
     	
			// using regex to replace all instances of x, ÷, ^ with *, / and **
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '\*\*');
			
			//using regex to remove decimals from the end of an equation
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
      

      
			if(equation)
				input.innerHTML = eval(equation);	
			  decimalAdded = false;
		}
		
	
    // No two operators should be added consecutively.		
		else if(operators.indexOf(btnVal) > -1) {
			
			var lastChar = inputVal[inputVal.length - 1];
			
			// Only add operator if input is not empty 
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			// Allow minus operator if the string is empty
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
    // allow decimal point input
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
		// if any other key is pressed, just append it after the decimal
		else {
			input.innerHTML += btnVal;
		}
		
	
		e.preventDefault();
	} 
}

// keyboard input 
document.onkeydown = function(event) {

	var key_press = String.fromCharCode(event.keyCode);
	var key_code = event.keyCode;
	var input = document.querySelector('.screen');
	var inputVal = input.innerHTML;
	var btnVal = this.innerHTML;
  var lastChar = inputVal[inputVal.length - 1];
  var equation = inputVal;
	// Using regex to replace all instances of x, ÷, ^ with *, / and ** respectively. 
	equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');


  
    if(key_press==1) {
      input.innerHTML += key_press;
  }
    if(key_press==2) {
      input.innerHTML += key_press; 
  }
    if(key_press==3 || key_code == 32) {
      input.innerHTML += key_press; 
  }
    if(key_press==4) {
      input.innerHTML += key_press; 
  }
    if(key_press==5) {
      input.innerHTML += key_press; 
  }
    if(key_press==6 && event.shiftKey == false) {
      input.innerHTML += key_press; 
  }
    if(key_press==7) {
      input.innerHTML += key_press; 
  }
    if(key_press==8 && event.shiftKey == false) {
      input.innerHTML += key_press; 
  }
    if(key_press==9) {
      input.innerHTML += key_press; 
  }
    if(key_press==0) {
      input.innerHTML += key_press;
  }
  
 
  
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 187 && event.shiftKey) || (key_code == 107) || (key_code == 61 && event.shiftKey)) {
      document.querySelector('.screen').innerHTML += '+';
  }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 189 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 107)) {
      document.querySelector('.screen').innerHTML += '-';
  }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 56 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 106)) {
      document.querySelector('.screen').innerHTML += 'x';
  }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 191) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 111)) {
      document.querySelector('.screen').innerHTML += '÷';
  }
    if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 54 && event.shiftKey)) {
      document.querySelector('.screen').innerHTML += '^';
  }
    if(key_code==13 || key_code==187 && event.shiftKey == false) {
      input.innerHTML = eval(equation);
      //reset decimal added flag
      decimalAdded =false;
  }
    if(key_code==9 || key_code==46) {   //tab key clears everyting
			input.innerHTML = '';
			decimalAdded = false;
  }
}

