define(
["chai", "helpers/sandbox"],
function(chai, Sandbox) {

    var expect = chai.expect,
        env;

    suite("Sandbox", function() {

        setup(function() {
            env = {};

            env.sb = sinon.sandbox.create();

            env.sandboxSpy = env.sb.spy();

            env.sandbox = Sandbox;
        });

        teardown(function() {
            env.sb.restore();
        });

        test("Sandbox should exist", function() {
            expect(env.sandbox).to.be.ok;
        });

        test("should be capable of Pub Sub", function() {
            // Arrange
            env.sandbox.on("some-event-name", env.sandboxSpy);

            // Act
            env.sandbox.trigger("some-event-name");

            // Assert
            expect(env.sandboxSpy.called).to.be.true;

            // Cleanup
            env.sandbox.off("some-event-name", env.sandboxSpy);
        });

    });

});
