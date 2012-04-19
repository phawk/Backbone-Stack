# Filename: views/home/main.coffee
define [
  'jquery'
  'underscore'
  'backbone'
  'handlebars'
  'global'
  'text!templates/home/main.html'
], ($, _, Backbone, Handlebars, global, mainHomeTemplate) ->

  class mainHomeView extends Backbone.View
    el: $ "#content"
    template: Handlebars.compile mainHomeTemplate

    render: ->
      console.log "Render: Homepage"

      # Render the view
      @el.html @template()

  # Return the instantiated view
  new mainHomeView