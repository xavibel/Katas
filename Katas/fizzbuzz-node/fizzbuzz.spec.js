var fizzbuzz = require("./fizzbuzz.js");

/*Any number divisible by three is replaced by the word fizz and 
	any divisible by five by the word buzz. 
	Numbers divisible by both become fizzbuzz.*/

describe("fizzbuzz", function() {
	it("number divisible by three returns fizz", function() {
		expect(fizzbuzz.answer(3)).toEqual("fizz");
    	expect(fizzbuzz.answer(6)).toEqual("fizz");
    	expect(fizzbuzz.answer(9)).toEqual("fizz");
    });
    
    it("number divisible by five returns buzz", function() {
    	expect(fizzbuzz.answer(5)).toEqual("buzz");
    	expect(fizzbuzz.answer(10)).toEqual("buzz");
    });
    
    it("number fifteen returns fizzbuzz", function() {
    	expect(fizzbuzz.answer(15)).toEqual("fizzbuzz");
    });
    
});