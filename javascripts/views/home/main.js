(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'handlebars', 'global', 'text!templates/home/main.html'], function($, _, Backbone, Handlebars, global, mainHomeTemplate) {
    var mainHomeView;
    mainHomeView = (function(_super) {

      __extends(mainHomeView, _super);

      mainHomeView.name = 'mainHomeView';

      function mainHomeView() {
        return mainHomeView.__super__.constructor.apply(this, arguments);
      }

      mainHomeView.prototype.el = $("#content");

      mainHomeView.prototype.template = Handlebars.compile(mainHomeTemplate);

      mainHomeView.prototype.render = function() {
        console.log("Render: Homepage");
        return this.el.html(this.template());
      };

      return mainHomeView;

    })(Backbone.View);
    return new mainHomeView;
  });

}).call(this);
