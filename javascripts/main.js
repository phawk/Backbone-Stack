(function() {
  require.config({
    paths: {
      jquery: 'libs/jquery/jquery-min',
      underscore: 'libs/underscore/underscore-min',
      backbone: 'libs/backbone/backbone-optamd3-min',
      handlebars: 'libs/handlebars/handlebars',
      text: 'libs/require/text',
      templates: 'templates',
      global: 'libs/global/globals'
    },
    baseUrl : 'javascripts',
    urlArgs: "bust=" +  (new Date()).getTime()  // cache-busting for development
  });

  require([
    'app'
  ], function(App){
    App.initialize();
  });
})();