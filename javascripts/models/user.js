(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  define(["underscore", "backbone"], function(_, Backbone) {
    var User;
    return User = (function(_super) {

      __extends(User, _super);

      User.name = 'User';

      function User() {
        return User.__super__.constructor.apply(this, arguments);
      }

      User.prototype.defaults = {
        email: null,
        name: null
      };

      return User;

    })(Backbone.Model);
  });

}).call(this);
