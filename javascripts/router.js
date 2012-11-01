define(
['zepto', 'underscore', 'backbone', 'views/home/main'], 
function($, _, Backbone, mainHomeView) {

    var AppRouter = Backbone.Router.extend({

        routes: {
            "": "homepage",
            "*actions": "defaultAction"
        },

        homepage: function() {
            // Homepage
            new mainHomeView({
                el: $(".main-app")
            }).render();
        },

        defaultAction: function(actions) {
            // 404 route
        }

    });

    return {

        initialize: function() {
            var router = new AppRouter();

            Backbone.history.start();

            return router;
        }

    };

});