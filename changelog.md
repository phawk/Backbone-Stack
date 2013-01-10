# Recent changes

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