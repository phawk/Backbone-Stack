require.config({
    baseUrl: "",
    paths: {
        "jquery": "../vendor/jquery/jquery.min",
        "underscore": "../vendor/underscore/underscore-amd",
        "backbone": "../vendor/backbone/backbone-amd",
        "handlebars": "../vendor/handlebars/handlebars.runtime",
        "templates": "../src/templates/templates",
        "chai": "../vendor/chai/chai",
        "src": "../src"
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        'templates': {
            exports: 'JST'
        }
    },
    urlArgs: "bust=" + (new Date()).getTime() // cache-busting for development
});

require([
    "helpers/sandbox.test",
    "views/home/main.test"
], function() {
    // Start the test runner
    mocha.run();
});