define(
["libs/chai/chai", "libs/chai/sinon-chai", "helpers/sandbox"],
function(chai, sinonChai, Sandbox) {

    var should = chai.should();

    suite("Sandbox", function() {

        setup(function() {
            this.sandbox = Sandbox;
        });

        teardown(function() {
            this.sandbox = null;
        });

        test("Sandbox should exist", function() {
            this.sandbox.should.be.ok;
        });

        test("should be capable of Pub Sub", function() {
            // Arrange
            var sandboxSpy = sinon.spy();
            this.sandbox.on("some-event-name", sandboxSpy);

            // Act
            this.sandbox.trigger("some-event-name");

            // Assert
            sandboxSpy.should.have.been.calledOnce;

            // Cleanup
            this.sandbox.off("some-event-name", sandboxSpy);
            sandboxSpy = null;
        });

    });

});