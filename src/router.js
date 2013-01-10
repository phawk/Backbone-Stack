define(
['jquery', 'underscore', 'backbone', 'views/home/main'],
function($, _, Backbone, MainHomeView) {

    var AppRouter = Backbone.Router.extend({

        routes: {
            "": "homepage",
            "*actions": "defaultAction"
        },

        homepage: function() {
            // Homepage
            new MainHomeView({
                el: $(".main-app")
            }).render();
        },

        defaultAction: function() {
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