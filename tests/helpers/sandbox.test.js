define(
["chai", "src/helpers/sandbox"],
function(chai, Sandbox) {

    var expect = chai.expect;

    suite("Sandbox", function() {

        setup(function() {
            this.sandbox = Sandbox;
        });

        teardown(function() {
            this.sandbox = null;
        });

        test("Sandbox should exist", function() {
            expect(this.sandbox).to.be.ok;
        });

        test("should be capable of Pub Sub", function() {
            // Arrange
            var sandboxSpy = sinon.spy();
            this.sandbox.on("some-event-name", sandboxSpy);

            // Act
            this.sandbox.trigger("some-event-name");

            // Assert
            expect(sandboxSpy.called).to.be.true;

            // Cleanup
            this.sandbox.off("some-event-name", sandboxSpy);
            sandboxSpy = null;
        });

    });

});