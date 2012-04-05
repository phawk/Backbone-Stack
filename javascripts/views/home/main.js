// Filename: views/home/main
define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'global',
  'text!templates/home/main.html'
], function($, _, Backbone, Handlebars, global, mainHomeTemplate){

    var mainHomeView = Backbone.View.extend({

        el: $("#content"),

        template: Handlebars.compile(mainHomeTemplate),

        render: function() {
            console.log('Render: homepage');
            
            // Render the view
            this.el.html(this.template());
        }

    });
    return new mainHomeView;
});