define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["home/main.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"hero-unit\">\n	<h1>Welcome</h1>\n</div>";
  });

return this["JST"];

});