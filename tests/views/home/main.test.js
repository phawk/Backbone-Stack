define(
["jquery", "chai", "src/views/home/main"],
function($, chai, HomeMainView) {

    var expect = chai.expect;

    suite("Home Main View", function() {

        setup(function() {
            this.homemain = new HomeMainView({
                el: $('<div>')
            });
        });

        teardown(function() {
            this.homemain = null;
        });

        test("should exist", function() {
            expect(this.homemain).to.be.ok;
        });

        test("should render a welcome header", function() {
            // Arrange
            this.homemain.render();

            expect(this.homemain.$('h1').text()).to.equal("Welcome");
        });

    });

});