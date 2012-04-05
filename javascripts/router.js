// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'global',
  'views/home/main',
], function($, 
            _, 
            Backbone, 
            global,
            mainHomeView) {

  // Create our router
  var AppRouter = Backbone.Router.extend({
    
    currentView: null,

    routes: {
      // Default
      '*actions':          'defaultAction'
    },
    
    defaultAction: function(actions) {
      // We have no matching route, lets display the home page
      this.prepareView(mainHomeView);
    },

    viewArgs: null,

    prepareView: function(view) {
      if (this.currentView !== null && this.currentView.destroy !== undefined)
      {
          // Call the deconstructor
          this.currentView.destroy();
      }

      // Set current view object
      this.currentView = view;

      // Fade out the current view
      $('#content').slideUp(200, $.proxy(this, 'renderView'));
    },

    renderView: function() {
      // render the new view
      this.currentView.render(this.viewArgs);

      // Slide Down the content
      $('#content').slideDown(200);
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
