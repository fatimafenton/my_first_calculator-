console.log('main.js') 
var term1 = null; //Declare the var term1
var term2 = null;//Declare the var term2
var operation = null;//Declare var operation

	function addToDisplay(addChar){
		document.getElementById('screen1').value += addChar; //display value in screen1
	} 														//add more then 1value to the screen1(+=) 	

	function addToScreen(num)
	{
		document.getElementById('screen2').value +=num;//dispaly value in screen2
		addToDisplay(num);//take of the passed number and display in screen2 after a operation 	
	} 
	function doOperation(op){	
		if (operation === null) {
			term1 = document.getElementById('screen2').value * 1;//Take the value on screen2 and put it in to term1
		}
		else{
			term2 = document.getElementById('screen2').value * 1;//If the operation button is pressed take the value in screen2 and place it in term2
			// do the maths and put the answer in term 1
			term1 = doMaths(term1, operation, term2);
		}	
		addToDisplay(' '+op+' ');// adding the operation passed with spaces to screen 2
		document.getElementById('screen2').value = ''; //clear the screen for the next number
		term2 = 0;//clear term2
		operation = op;	//save the current operation
}	
function doMaths(x, op, y){
	console.log('['+x+']['+op+']['+y+']');
	 answer = '' ;//after doing the maths
	if(op == '+'){ //if the operation+ is pressed..the calc should add term1 and term2
		answer = term1 + term2;
	}
	else if(op == '-'){//if the operation- is pressed..the calc should - term1 and term2
		answer = term1 - term2;	
	}
	else if (op == '*') {//if the operation* is pressed..the calc should * term1 and term2
		answer = term1 * term2;
	}
	else if (op == '/') {//if the operation/ is pressed..the calc should / term1 and term2
		answer = term1 / term2;
	}
	else if(op == '%'){
		answer = term1 % term2;
	}
	return answer;//return the answer to whatever called the function

}	
	function equal(){
		term2 = document.getElementById('screen2').value *1;//*1 force the string to number
		// do the maths
		term2 = doMaths(term1, operation, term2);
		term1 = 0;
		operation = null;
		document.getElementById('screen2').value = term2;
	}
function reSet(arg) {
	if(arg == 'ce'){ // if CE pressed
		document.getElementById('screen1').value = '';//clear everything in screen2
		term1 = 0;//term1 should = 0(ready for next number)
		operation = null;//should be blank
	}
	else{
		var temp = document.getElementById('screen1').value;//declare a var = 'whatever is on screen1'
		// convert the display text to an array
		var tempArr = temp.split(' ');// the temp to split after each space
		// remove the last item of the array
		tempArr.splice(tempArr.length-1);//
		// join the array back into a scring
		temp=tempArr.join(' ');
		// set the display text 
		document.getElementById('screen1').value = temp;
	}
	 document.getElementById('screen2').value = ''; //clear whatever is on screen2
	 term2 =0;	
}
function SCI () {
	console.log('scientific');	
	if(document.getElementById('scienceDiv').style.display == 'none'){
		document.getElementById('scienceDiv').style.display = '';
	}
	else{
		document.getElementById('scienceDiv').style.display = 'none';
	}
	
}
	 


	


