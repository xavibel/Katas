/**
 * Give an answer to the current game
 *
 * @param number    current number in the game sequence
 * @return          appropriate answer to the current number
 */
var _number;

function answer(number){
	_number = number;
	var response = "";
	response += divisibleByThree();
	response += divisibleByFive();
	return response;
}

function divisibleByThree(){
	if (_number % 3 == 0) 
		return "fizz";
	else
		return "";
}

function divisibleByFive(){
	if (_number % 5 == 0) 
		return "buzz";
	else
		return "";
}

exports.answer = answer;