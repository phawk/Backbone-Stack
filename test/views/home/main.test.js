define(
["jquery", "chai", "views/home/main"],
function($, chai, HomeMainView) {

    var expect = chai.expect,
        env;

    suite("Home Main View", function() {

        setup(function() {
            env = {};

            env.homemain = new HomeMainView({
                el: $('<div>')
            });
        });

        teardown(function() {
            env.homemain.remove();
        });

        test("should exist", function() {
            expect(env.homemain).to.be.an("object");
        });

        test("should render a welcome header", function() {
            // Arrange
            env.homemain.render();

            expect(env.homemain.$('h1').text()).to.equal("Welcome");
        });

    });

});
