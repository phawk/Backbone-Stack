###
Filename: api.js
Simple AMD library to do api calls

@created: Wedensday, 4th April 2012
@author: Pete Hawkins <pete@phawk.co.uk>
###
define ['jquery'], ($) ->
  call: (endpoint, method, params, callback) ->
    
    # Add enpoint and type to data object
    params['endpoint'] = endpoint
    params['method'] = method

    # Do a straightforward api call
    $.ajax
      url          :   '/api_helper/api_call'
      type         :   'POST'
      data         :   params
      dataType     :   'json'

      # Success callback
      success      :   callback

      # Error callback
      error        :   (xhr, error, status) ->
        console.log error
        console.log status