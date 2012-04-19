# Filename: router.coffee
define [
  'jquery'
  'underscore'
  'backbone'
  'global'
  'views/home/main'
], ($, _, Backbone, global, mainHomeView) ->

  class AppRouter extends Backbone.Router
    currentView: null

    viewArgs: null

    routes:
      # Default route
      "*actions"     :     "defaultAction"

    defaultAction: (actions) ->
      # We have no matching route, lets display the home page
      @prepareView mainHomeView

    prepareView: (view) ->
      # Call the deconstructor
      if @currentView? and @currentView.destroy?
        @currentView.destroy()

      # Set current view object
      @currentView = view

      # Fade out the current view
      $('#content').slideUp 200, @renderView

    renderView: =>
      # render the new view
      @currentView.render @viewArgs

      # Slide Down the content
      $('#content').slideDown 200

  # Initialise the router
  initialize: ->
    app_router = new AppRouter
    Backbone.history.start()

