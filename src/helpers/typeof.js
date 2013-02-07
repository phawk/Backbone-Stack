define(function() {

    /*
     *   typeOf()
     *
     *   Improved typeOf method, more reliable than JavaScripts
     */
    var typeOf = function(value) {
        var Klass = Object.prototype.toString.call(value).slice(8, -1);

        // Protect againt strange environments
        if (value === null) { return 'null'; }
        if (value === undefined) { return 'undefined'; }

        return Klass.toLowerCase();
    };

    return typeOf;

});