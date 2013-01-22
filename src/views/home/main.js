define(
['jquery', 'underscore', 'backbone', 'handlebars', 'templates'],
function($, _, Backbone, Handlebars, templates) {

    return Backbone.View.extend({

        template: Handlebars.template(templates['home/main.html']),

        render: function() {
            this.$el.html(this.template());

            return this;
        }

    });

});
