require.config({
    baseUrl: "javascripts",
    paths: {
        "zepto": "libs/zepto/zepto.min",
        "underscore": "libs/underscore/underscore-min",
        "backbone": "libs/backbone/backbone-min",
        "handlebars": "libs/handlebars/handlebars",
        "moment": "libs/moment/moment.min",
        "text": "libs/require/text"
    },
    shim: {
        'zepto': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'zepto'],
            exports: 'Backbone'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    },
    urlArgs: "bust=" + (new Date()).getTime() // cache-busting for development
});

require(['app'], function(App) {

    // Startup the app view
    var app = new App();

});