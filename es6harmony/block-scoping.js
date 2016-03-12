// Block scoping

var a = 1;
function() { 
	var b = 2; // function scoping
}
console.log(b); // undefined

// var b;
if (true) {
	var b = 2; // block scoping, b is hoisted
}
console.log(b); // 2

// let is the new var
for (20) { 		// each time
	let b = 2; 	// create new b variable that is new for that loop 
} 				// and gets destroyed after that loop
console.log(b); // undefined

const foo = 1; //const can't be overwritten
if (true) {
	const bar = 2;
	const baz = { a: 1 };
	baz.a = 2;
}
console.log(bar); // undefined