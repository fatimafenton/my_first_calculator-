console.log('main.js') 
	function addtoscreen(num)
	{
		document.getElementById('screen2').value +=num;
} 
var term1 = null;
var term2 = null;
var operation = null;
function operation(op){
	if (op == '+') {
		console.log('plus');
	}
	else if (op == '-') {
		console.log('minus');
	}
	else if(op == '*'){
		console.log('multiplation')
	}
	else if (op == '/') {
		console.log('divison')
	}
	else if(op == '='){
		console.log('equal')
	}
	else if(op == 'reset'){
		console.log('clear')
	}
}

 


	


