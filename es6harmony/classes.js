// Classes

// before
function Parent() {
	// constructor
}
Parent.prototype.foo = function() {};
Parent.prototype.bar = function() {};

// now
class Parent {
	age = 34; // static class properties (ES7)
	constructor() {

	}

	static foo() {

	}

	bar() {

	}
}
var parent = new Parent();
parent.bar();
Parent.foo();
console.log(parent.age); // 34

class Child extends Parent {
	constructor() {
		super()
	}

	baz() {

	}	
}
var child = new Child();
child.baz();
child.bar();