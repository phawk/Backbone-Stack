require.config({
    baseUrl: "",
    paths: {
        "jquery": "../vendor/jquery/jquery.min",
        "underscore": "../vendor/underscore/underscore-amd",
        "backbone": "../vendor/backbone/backbone-amd",
        "templates": "../src/templates/templates",
        "chai": "../vendor/chai/chai",
        "src": "../src"
    },
    urlArgs: "bust=" + (new Date()).getTime() // cache-busting for development
});

require(["helpers/sandbox.test"], function() {
    // Start the test runner
    mocha.run();
});