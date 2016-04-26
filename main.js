console.log('main.js') 
var term1 = null;
var term2 = null;
var operation = null;
	function addToDisplay(addChar){
		document.getElementById('screen1').value += addChar;
	} 

	function addToScreen(num)
	{
		document.getElementById('screen2').value +=num;
		addToDisplay(num);
	} 
	function doOperation(op){
		addToDisplay(op);
		document.getElementById('screen2').value = ' '+op+' ';

	if (operation === null) {
	term1 = document.getElementById('screen2') * 1;
	}
	else{
		term2 = document.getElementById('screen2') * 1;
		// do the maths
		term1 = doMaths(term1, operation, term2);
		term2 = 0;
		}		
		//operation = op; //save the current operation
		//document.getElementById('screen1')=" ";//clear the screen for the next number
}	
function doMaths(x, op, y){
	answer = 0;
	if(op == '+'){
		answer = term1 + term2;
	}
	else if(op == '-'){
		answer = term1 - term2;	
	}
	else if (op == '*') {
		answer = term1 * term2;
	}
	else if (op == '/') {
		answer = term1 / term2;
	}
	return answer;
}	
	function equal(){
		term2 = document.getElementById('screen1').value *1;
		// do the maths
		term2 = doMaths(term1, operation, term2);
		term1 = 0;
		operation = null;
		document.getElementById('screen2').value = term2;
	}




	


