define(
["chai", "helpers/is"],
function(chai, is) {

    var expect = chai.expect;

    suite("is()", function() {

        test("should work with Booleans", function() {
            expect(is(true, "boolean")).to.be.true;
        });

        test("should work with Strings", function() {
            expect(is("Some string", "string")).to.be.true;
        });

        test("should work with Objects", function() {
            var obj = {};
            expect(is(obj, "object")).to.be.true;
            expect(is("string", "object")).to.be.false;
        });

        test("should work with Arrays", function() {
            var obj = [];
            expect(is(obj, "array")).to.be.true;
        });

    });

});