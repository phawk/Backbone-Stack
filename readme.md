# Backbone Stack

This is my Backbone Stack for starting new projects, it alleviates a lot of the common boilerplate code and setup. It uses AMD modules, mocha for TDD and handlebars precompiled templates.

[![Build Status](https://travis-ci.org/phawk/Backbone-Stack.png)](https://travis-ci.org/phawk/Backbone-Stack)

### Latest changes (10th Jan 2013)

* Added headless unit testing with command line output with [phantomjs](http://phantomjs.org/) and [grunt-mocha](https://github.com/kmiyashiro/grunt-mocha).
* Added `.travis.yml` file for travis-ci testing support
* Added new grunt tasks for **test** and **build**
* Easy to setup git pre-commit hook to test and build.
* Inserted my JSHint settings to Gruntfile, all with comments so you can easily tweak, or view the [JSHint docs](http://www.jshint.com/docs/) for more.

[View the changelog](https://github.com/phawk/Backbone-Stack/blob/master/changelog.md)

### Included libraries

* [Grunt](http://gruntjs.com/) - A task runner like Make, used to watch and compile the JS code
* [Require JS](http://requirejs.org/) - To asynchronously load in all of the scripts and templates
* [Backbone JS](http://documentcloud.github.com/backbone/) - for MVC JavaScript
* [jQuery](http://jquery.com/) - For DOM manipulation and ajax
* [Handlebars JS](http://handlebarsjs.com/) - for templating
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/) - For a quick and dirty UI prototype

### Libraries for Test Driven Development

* [Mocha](http://visionmedia.github.com/mocha/) - TDD / BDD testing framework for JavaScript
* [Chai.js](http://chaijs.com/) - Nice assertions
* [Sinon](http://sinonjs.org/) - Spies, Stubs and Mocks

* * *

# Setup

## Installing dependencies

**Note** you will need [node.js and npm](http://nodejs.org) and [phantomJS](http://phantomjs.org) for headless unit tests.

```sh
# Install grunt build tool
$ npm install -g grunt

# Install required node modules for grunt
$ npm install
```

* * *

# Getting started

## Running your app

Open up the `public/index.html` file in your browser to view your app, it will be using pre-compiled templates and build and minified JS.

## Testing your code

The unit tests can be opened up in the browser with the `tests/test-runner.html` file, or can be done through grunt on the command line.

The idea behind linting first, then testing and then building is to fail as quickly and early as possible, this will really help to boost productivity.

```sh
# Watch src/ and tests/ files and lint, test, then build on change (handy for TDD)
$ grunt watch

# Lint and test files
$ grunt test
```

**Note** the test suite loads requireJS dynamically and you don't need to build to run the tests, this lets you do TDD with less effort.

## Building your code

All of the JavaScript is pre-build using [grunt](http://gruntjs.com/) and the r.js optimiser, this means your development environment better simulates what will be served in production.

```sh
# Watch src/ and tests/ files and test, then build on change
$ grunt watch

# Do a one off build - will lint and test your code first
$ grunt build
```

## git pre-commit hook

Simply run these commands inside your project dir to set a commit hook that will run before each commit. If any of the test or build phase fails the commit will not be accepted.

```sh
# Create a pre-commit hook
$ touch .git/hooks/pre-commit
# Make executable
$ chmod +x .git/hooks/pre-commit
# Build on commit
$ echo "grunt build" > .git/hooks/pre-commit
```

* * *

# License

Copyright (C) 2013 Pete Hawkins

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.