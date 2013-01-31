require.config({
    baseUrl: "../src",
    paths: {
        // App deps
        "jquery": "../components/jquery/jquery",
        "underscore": "../components/underscore-amd/underscore",
        "backbone": "../components/backbone-amd/backbone",
        "handlebars": "../components/handlebars/handlebars.runtime",

        // Dev / Test deps
        "chai": "../components/chai/chai",
        "test": "../test"
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        }
    },
    urlArgs: "bust=" + (new Date()).getTime() // cache-busting for development
});