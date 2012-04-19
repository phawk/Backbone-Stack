# Backbone Stack

This is the early days of my new stack for building client side web applications. All the source is now written in [CoffeeScript](http://coffeescript.org/) for ease of maintainance and readability.

## What's included?

* [Require JS](http://requirejs.org/) - To asynchronously load in all of the scripts and templates
* [Backbone JS](http://documentcloud.github.com/backbone/) - for MVC JavaScript
* [jQuery](http://jquery.com/) - For dom manipulation and ajax requests
* [Handlebars JS](http://handlebarsjs.com/) - for templating
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/) - For a quick and dirty UI prototype

## Get started

To compile the .coffee files into JavaScript I am using [Jitter](https://github.com/TrevorBurnham/jitter) to watch the files for changes and automatically recompile them. If you look carefully you will notice the coffee directory mirrors the layout of the javascripts directory, jitter will automatically compile your files and keep this structure.

To install jitter you will need to install [nodejs and npm](http://shapeshed.com/setting-up-nodejs-and-npm-on-mac-osx/), then:

    npm install -g coffee-script

    npm install -g jitter

## Anything else?

I have started the barebones approach to a few global libraries through the client side application. 

### Sessions
A session library to persist client side storage of tokens or minimal user details. Currently this is a basic wrapper around the localStorage API, but I do plan to integrate a fallback for this to support cookies in older browsers.

### Notifications
This currently only has 1 method for simple alerts although I will add in extra methods for blocking, non-blocking alerts and even confirm boxes to get user feedback.

### API library
Also pretty simple to date, this will wrap around your ajax requests to simplify the code in your views and routes and allow you to easily abstract error reporting and network connection checking.