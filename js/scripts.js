//MATH FUNCTIONS
//addition
var add = function(number1, number2) {
	return number1 + number2;
};

//subtraction
var subtract = function(number1, number2) {
	return number1 - number2;
};

// multiplication
function multiply(number1, number2) {
	return number1 * number2;
}

//division
function divide(number1, number2) {
	return number1 / number2;
}
//END MATH FUNCTIONS


$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
});
