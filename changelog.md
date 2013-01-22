# Recent changes

## Latest changes (22nd Jan 2013)

* Added [Happen](https://github.com/tmcw/happen) for testing UI events like clicks in detatched DOM nodes.
* Now using [grunt-handlebars](https://github.com/gruntjs/grunt-contrib-handlebars/) to precompile the templates before requireJS even gets near them, this allows for better testing of views in unit tests.

## 15th Jan 2013

* Switch to using AMD compliant versions of Backbone and Underscore from [amdjs](https://github.com/amdjs)
* Add [Almond](https://github.com/jrburke/almond) for more lightweight build script and no need to inclide require.js in output.
* Updated jQuery to 1.9

## 10th Jan 2013

* Added headless unit testing with command line output with [phantomjs](http://phantomjs.org/) and [grunt-mocha](https://github.com/kmiyashiro/grunt-mocha).
* Added `.travis.yml` file for travis-ci testing support
* Added new grunt tasks for **test** and **build**
* Easy to setup git pre-commit hook to test and build.
* Inserted my JSHint settings to Gruntfile, all with comments so you can easily tweak, or view the [JSHint docs](http://www.jshint.com/docs/) for more.

## 4th Jan 2013

* Added grunt to build and watch the JS
* Stopped using require JS without the build step, even for development.
* Now using the excellent [HBS require](https://github.com/SlexAxton/require-handlebars-plugin) plugin to always precompile the handlebars templates.
* Updated to latest version of all the plugins: jQuery 1.8.3, Backbone 0.9.9, underscore 1.4.3 etc.
* Now using chai's `expect()` style assertions, from doing a lot of testing expect seems to work better and given better output as it can never be chained in with undefined variables like `should()`.