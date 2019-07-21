


var animals = [ 'horses', 'elephants', 'dolphins', 'cats', 'dogs'];

console.log(animals.length);

animals.forEach(function(item){
	console.log(item.length);

});

animals.reverse();
console.log(animals);

// Create a copy of your original array 
//  Now reverse the copied array

var copiedArray = function(someArray) {
	var newArray = [];
	for( var i = 0; i < someArray.length; i++) {
		newArray.push(someArray[i]);
	}
	return newArray;
};

var reversedArray = copiedArray(animals).reverse();

console.log(reversedArray);


// Sort your array of strings alphabetically.

animals.sort();
console.log(animals.sort());


// Create an array of at least 5 numbers. Each number should be at least two digits. Sort the array numerically, in ascending order (smallest to biggest). Then sort it in descending order.


var numArray = [6546, 651, 22, 844, 367, 851, 8887913, 456];

var ascendingOrder = function(a,b) {
		return a-b;
}
console.log(numArray.sort(ascendingOrder))




var descendingOrder = function(a,b) {
		return b-a;
}
console.log(numArray.sort(descendingOrder))

// : Create an array with three strings.
// Using array methods, add two new strings to the end of the array.
// Now remove one string from the beginning of the array. Log the final array to the console. How many strings does it have?

var fruits = ['apples', 'pears', 'apricots'];
	fruits.push('bananas', 'cherries')
	fruits.shift()

console.log(fruits);


// Create an input and a button element. Create an unordered list element.
// In JS: Create a function which will run when the button is clicked. This function should add the value of the input to your empty array. THEN, your function should effectively loop through your array and append each item inside a list item to the unordered list in your HTML. It should do this correctly no matter how many strings are in your array (in other words, if your array has one string, you will see one list item; if your array has five strings, you will see five list items).


var emptyArray = [];
var myList = document.getElementsByTagName("ul")[0];

function addToArray() {
	// retrieve data from the from
	var userData = document.getElementsByTagName("input")[0].value;
	emptyArray.push(userData);
		// (clears out the list)
	myList.innerHTML = ""; 

for (var i = 0; i<emptyArray.length; i++) {
	var newLi = document.createElement("li");
	newLi.innerText = emptyArray[i];
	myList.appendChild(newLi);


}	


}
