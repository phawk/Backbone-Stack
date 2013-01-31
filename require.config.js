require.config({
    baseUrl: "../src",
    paths: {
        // App deps
        "jquery": "../vendor/jquery/jquery.min",
        "underscore": "../vendor/underscore/underscore-amd",
        "backbone": "../vendor/backbone/backbone-amd",
        "handlebars": "../vendor/handlebars/handlebars.runtime",

        // Dev / Test deps
        "chai": "../vendor/chai/chai",
        "test": "../test"
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        }
    },
    urlArgs: "bust=" + (new Date()).getTime() // cache-busting for development
});