// Destructuring

// with objects
var foo = {
	bar: 1,
	baz: 2
};
var { bar, baz } = foo; // 1, 2
var { bar } = foo; // 1
var { bar } = veryLargeNamefoo;

// with arrays
var tenses = ["me", "you", "he"];
var [ firstPerson, secondPerson ] = tenses; // me, you

// with promises
Promise.all([promise1, promise2]).then(function(results) {
	var [ result1 ] = results; // results from promise1
});

// destructuring on receiving
Promise.all([promise1, promise2]).then(function([results1, results2]) {
	console.log(results1, results2); // results from promise1, promise2
});

// Making object for arguments
var foo = 2;
var obj = {
	bar: 1,
	foo,
};
var name = "Will";
var age = 34;
some.method({ name, age });

// Generate your own keys
var name = "Will";
// ES5
var obj = {};
obj["name" + name] = "some value"; // second step
// ES6. Now we can define props during defing the object
var obj = {
	["name" + name]: "some value",
};

// Destructuring arguments
function calcBmi({ height: h, weight: w, max = 25, callback }) {
	var bmi = w / Math.pow(h, 2);
	if (bmi > max) {
		console.log("You're overweight");
	}
	if (callback) {
		callback(bmi);
	}
}
calcBmi({weight, height, max: 25});
calcBmi({ weight, height, function() {} });