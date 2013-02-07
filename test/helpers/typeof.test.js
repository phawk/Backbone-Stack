define(
["chai", "helpers/typeof"],
function(chai, typeOf) {

    var expect = chai.expect;

    suite("typeOf()", function() {

        suite("Booleans", function() {

            test("true should return boolean", function() {
                expect(typeOf(true)).to.equal("boolean");
            });

            test("false should return boolean", function() {
                expect(typeOf(false)).to.equal("boolean");
            });

        });

        suite("Strings", function() {

            test("should return string for empty strings", function() {
                expect(typeOf("")).to.equal("string");
            });

            test("should return string for non-empty strings", function() {
                expect(typeOf("woohoo")).to.equal("string");
            });

        });

        suite("Numbers", function() {

            test("should return number", function() {
                expect(typeOf(42)).to.equal("number");
            });

            test("should return number for zero", function() {
                expect(typeOf(0)).to.equal("number");
            });

            test("should return number for negatives", function() {
                expect(typeOf(-1)).to.equal("number");
            });

            test("should return number for floats", function() {
                expect(typeOf(0.234234)).to.equal("number");
            });

        });

        suite("Arrays", function() {

            test("should return array for empty arrays", function() {
                expect(typeOf([])).to.equal("array");
            });

            test("should return array for non empty arrays", function() {
                expect(typeOf([1, 2, 3])).to.equal("array");
            });

        });

        suite("Objects", function() {

            test("should return object for object literals", function() {
                expect(typeOf({})).to.equal("object");
            });

            test("should return object for instatiated constructors", function() {
                function Todo() {

                }
                var obj = new Todo();
                expect(typeOf(obj)).to.equal("object");
            });

        });

        suite("Functions", function() {

            test("should return function for anon function", function() {
                expect(typeOf(function() {})).to.equal("function");
            });

            test("should return function for named method", function() {
                function Todo() {

                }
                expect(typeOf(Todo)).to.equal("function");
            });

            test("should return function for named method", function() {
                var todo = function() {
                    
                };
                expect(typeOf(todo)).to.equal("function");
            });

        });

        suite("Date", function() {

            test("should return object", function() {
                expect(typeOf(new Date())).to.equal("date");
            });

        });

        suite("Error", function() {

            test("should return object", function() {
                expect(typeOf(new Error())).to.equal("error");
            });

        });

        suite("RegExp", function() {

            test("should return regexp", function() {
                expect(typeOf(/^foo(bar)?$/i)).to.equal("regexp");
            });

        });

        suite("null", function() {

            test("should return null", function() {
                expect(typeOf(null)).to.equal("null");
            });

        });

        suite("undefined", function() {

            test("should return undefined", function() {
                expect(typeOf(undefined)).to.equal("undefined");
            });

        });

    });

});