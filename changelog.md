# Recent changes

## 0.3.1 28th Sept 2013

* Update to new `bower` and update components

## 0.3.0 4th May 2013

* Update node version assets to 0.0.8 for some nice bugfixes
* Update travis to use node 0.10

## 0.2.6 31st Mar 2013

* Update package.json to use grunt 0.4.1 for node 0.10.x

## 0.2.5 21st Mar 2013

* Upgrade Backbone to v 1.0.0.

## 0.2.4 1st Mar 2013

* Add [node-version-assets](https://github.com/techjacker/node-version-assets) for cache busting

## 0.2.3 26th Feb 2013

* Add less compile step
* Add boostrap from bower

## 0.2.2 7th Feb 2013

* Include typeOf() and is() helpers for more reliable type checking.

## 0.2.1 31st Jan 2013

* Use [Bower](http://twitter.github.com/bower/) for package management

## 0.2.0 31st Jan 2013

* Move index.html to root, makes it easier to use Backbone stack with other server side setups.
* Rename `public/` to `assets/` to make more sense.
* Rename `tests/` to `test/` as it seems more conventional.
* Update Grunt to the latest version.

## 0.1.1 30th Jan 2013

* Make templates wrapped with Handlebars.template by default.

## 0.1.0 - 22nd Jan 2013

* Added [Happen](https://github.com/tmcw/happen) for testing UI events like clicks in detatched DOM nodes.
* Now using [grunt-handlebars](https://github.com/gruntjs/grunt-contrib-handlebars/) to precompile the templates before requireJS even gets near them, this allows for better testing of views in unit tests.
* Swapped out Handlebars full library for Handlebars.runtime.

## 0.0.alpha - 15th Jan 2013

* Switch to using AMD compliant versions of Backbone and Underscore from [amdjs](https://github.com/amdjs)
* Add [Almond](https://github.com/jrburke/almond) for more lightweight build script and no need to inclide require.js in output.
* Updated jQuery to 1.9

## 0.0.alpha - 10th Jan 2013

* Added headless unit testing with command line output with [phantomjs](http://phantomjs.org/) and [grunt-mocha](https://github.com/kmiyashiro/grunt-mocha).
* Added `.travis.yml` file for travis-ci testing support
* Added new grunt tasks for **test** and **build**
* Easy to setup git pre-commit hook to test and build.
* Inserted my JSHint settings to Gruntfile, all with comments so you can easily tweak, or view the [JSHint docs](http://www.jshint.com/docs/) for more.

## 0.0.alpha - 4th Jan 2013

* Added grunt to build and watch the JS
* Stopped using require JS without the build step, even for development.
* Now using the excellent [HBS require](https://github.com/SlexAxton/require-handlebars-plugin) plugin to always precompile the handlebars templates.
* Updated to latest version of all the plugins: jQuery 1.8.3, Backbone 0.9.9, underscore 1.4.3 etc.
* Now using chai's `expect()` style assertions, from doing a lot of testing expect seems to work better and given better output as it can never be chained in with undefined variables like `should()`.
