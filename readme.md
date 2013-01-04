# Backbone Stack

This is my Backbone Stack for starting new projects, it alleviates a lot of the common boilerplate code and setup. It uses AMD modules, mocha for TDD and handlebars precompiled templates.

### Recent changes (4th January 2013)

* Added grunt to build and watch the JS
* Stopped using require JS without the build step, even for development.
* Now using the excellent [HBS require](https://github.com/SlexAxton/require-handlebars-plugin) plugin to always precompile the handlebars templates.
* Updated to latest version of all the plugins: jQuery 1.8.3, Backbone 0.9.9, underscore 1.4.3 etc.
* Now using chai's `expect()` style assertions, from doing a lot of testing expect seems to work better and given better output as it can never be chained in with undefined variables like `should()`.

### Included libraries

* [Grunt](http://gruntjs.com/) - A task runner like Make, used to watch and compile the JS code
* [Require JS](http://requirejs.org/) - To asynchronously load in all of the scripts and templates
* [Backbone JS](http://documentcloud.github.com/backbone/) - for MVC JavaScript
* [jQuery](http://jquery.com/) - For DOM manipulation and ajax
* [Handlebars JS](http://handlebarsjs.com/) - for templating
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/) - For a quick and dirty UI prototype

### Libraries for TDD

* [Mocha](http://visionmedia.github.com/mocha/) - TDD / BDD testing framework for JavaScript
* [Chai.js](http://chaijs.com/) - Nice assertions
* [Sinon](http://sinonjs.org/) - Spies, Stubs and Mocks

* * *

# Getting started

## Running your app

Open up the `public/index.html` file in your browser.

## Running your tests

Open up the `tests.html` file in your browser.

## Installing dependencies

**Note** you will need [node.js and npm](http://nodejs.org).

```sh
# Install grunt cli
$ npm install -g grunt

# Install require node modules for grunt
$ npm install
```

## Build process

All of the JavaScript is pre-build using [grunt](http://gruntjs.com/) and the r.js optimiser, this means your development environment better simulates what will be served in production.

```sh
# Watch src/ files and build on change
$ grunt watch

# Do a one off build
$ grunt requirejs
```

**Note** the test suite loads requireJS dynamically and you don't need to build to run the tests, this lets you do TDD with less effort.

* * *

# License

Copyright (C) 2013 Pete Hawkins

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.