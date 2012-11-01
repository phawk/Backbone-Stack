define(
['zepto', 'underscore', 'backbone', 'handlebars', 'text!templates/home/main.html'], 
function($, _, Backbone, Handlebars, mainHomeTemplate) {

    return Backbone.View.extend({

        template: Handlebars.compile(mainHomeTemplate),

        render: function() {
            this.$el.html(this.template());

            return this;
        }

    });

});
