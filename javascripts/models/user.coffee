# Filename: models/user.coffee
define ["underscore", "backbone"], (_, Backbone) ->
  class User extends Backbone.Model
    defaults:
      email: null
      name: null