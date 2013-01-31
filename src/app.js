define(
['jquery', 'views/home/main'],
function($, MainHomeView) {

    return {
        initialize: function() {
            new MainHomeView({
                el: $(".main-app")
            }).render();
        }
    };

});