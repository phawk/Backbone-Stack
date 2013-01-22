require.config({
    baseUrl: "",
    paths: {
        "jquery": "../libs/jquery/jquery.min",
        "underscore": "../libs/underscore/underscore-amd",
        "backbone": "../libs/backbone/backbone-amd",
        "templates": "../src/templates/templates",
        "chai": "../libs/chai/chai",
        "src": "../src"
    },
    urlArgs: "bust=" + (new Date()).getTime() // cache-busting for development
});

require(["helpers/sandbox.test"], function() {
    // Start the test runner
    mocha.run();
});