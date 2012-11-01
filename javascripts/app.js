define(
['zepto', 'underscore', 'backbone', 'router'],
function($, _, Backbone, Router) {

    return Backbone.View.extend({

        initialize: function() {
            // Boot up the router
            Router.initialize();
        }

    });

});