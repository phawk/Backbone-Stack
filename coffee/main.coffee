# Filename: main.coffee

require.config
  paths:
    # Remap Libraries
    jquery        :   'libs/jquery/jquery-min'
    underscore    :   'libs/underscore/underscore-min'
    backbone      :   'libs/backbone/backbone-optamd3-min'
    handlebars    :   'libs/handlebars/handlebars'
    text          :   'libs/require/text'
    templates     :   'templates'
    global        :   'libs/global/globals'

  # Other configuration items
  baseUrl       : 'javascripts'                        # Base url for require js
  urlArgs       : "bust= #{(new Date()).getTime()}"    # cache-busting for development

require ['app'], (App) ->
  App.initialize()