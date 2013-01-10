require.config({
    baseUrl: "tests",
    paths: {
        "jquery": "../libs/jquery/jquery-1.8.3.min",
        "underscore": "../libs/underscore/underscore-min",
        "backbone": "../libs/backbone/backbone-min",
        "hbs": "../libs/require/hbs",
        "i18nprecompile": "../libs/require/hbs/i18nprecompile",
        "json2": "../libs/require/hbs/json2",
        "handlebars": "../libs/handlebars/handlebars",
        "chai": "../libs/chai/chai",
        "src": "../src",
        "text": "../libs/require/text"
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    },
    urlArgs: "bust=" + (new Date()).getTime() // cache-busting for development
});

require(["helpers/sandbox.test"], function() {
    // Start the test runner
    mocha.run();
});