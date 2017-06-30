//1. Null, undefinded, empty check
let var1 = "";
let var2 = var1 || '';
// 2. If else
var age = 20;
let young = age<20? true: false;
// 3. RegExp
// 4. arguments shorthand
function myFunction() {
	console.log(arguments.length);
}
myFunction("Hai Nam", 2, 3);
// Shotfunction calling
function x() {
	console.log("Function x");
}
function y() {
	console.log("Function y");
}
// Longhand
let z= 2
if (z===2) {x();}
else y();
//shortHand
(z===2?x:y)();
// 5. Decimal base exponents
for (var i = 0; i < 1e5	; i++) {
	// do something	
}