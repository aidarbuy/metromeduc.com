// Generators

var myGen = function*() {
	var one = yield 1;
	var two = yield 2;
	var three = yield 3;
	console.log(one, two, three);
};

var gen = myGen(); // get the generator ready to run

console.log(gen.next()); // {value:1, done:false}
console.log(gen.next()); // {value:2, done:false}
console.log(gen.next()); // {value:3, done:false}
console.log(gen.next()); // {value:undefined, done:true}
console.log(gen.next()); // errors because you can't call next() on a closed generator