// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router'
], function($, _, Backbone, Router){
  var initialize = function(){
    // Initialize the router
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});
