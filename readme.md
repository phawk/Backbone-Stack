# Backbone Stack

## Recent changes (1st Nov 2012)

With writing front end code in Backbone.js daily for last 6 months I have tried and tested my choice of libraries and tweaked a few things from the last commit.

* jQuery has been swapped out for zepto as I no longer support legacy browsers and favour a faster more lightweight DOM engine, particularly for mobile.
* I practise TDD in all the code I write and have included Mocha for writing tests
* CoffeeScript is gone, I liked it for a while but I don't really see many benefits in using it, this is just my personal opinion.

## Included libraries

* [Require JS](http://requirejs.org/) - To asynchronously load in all of the scripts and templates
* [Backbone JS](http://documentcloud.github.com/backbone/) - for MVC JavaScript
* [zepto](http://zeptojs.com/) - For dom manipulation and ajax requests
* [Handlebars JS](http://handlebarsjs.com/) - for templating
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/) - For a quick and dirty UI prototype

## Libraries for TDD

* [Mocha](http://visionmedia.github.com/mocha/) - TDD / BDD testing framework for JavaScript
* [Chai.js](http://chaijs.com/) - Nice assertions
* [Sinon](http://sinonjs.org/) - Spies, Stubs and Mocks