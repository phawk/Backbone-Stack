define(
['jquery', 'underscore', 'backbone', 'hbs!templates/home/main'],
function($, _, Backbone, mainHomeTemplate) {

    return Backbone.View.extend({

        template: mainHomeTemplate,

        render: function() {
            this.$el.html(this.template());

            return this;
        }

    });

});
