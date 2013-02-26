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
        "test": "../test",
        
        // Include bootstrap as a shim as it doesn't support AMD. See PR at https://github.com/twitter/bootstrap/pull/534
        "bootstrap": "../components/bootstrap/docs/assets/js/bootstrap"
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        'bootstrap': {
            deps: ['jquery']
        }
    },
    urlArgs: "bust=" + (new Date()).getTime() // cache-busting for development
});