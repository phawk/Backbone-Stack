define(['helpers/typeof'], function(typeOf) {

    /*
     *   is()
     *
     *   Used for comparison of type
     */
    var is = function(value, type) {
        if (typeOf(type) !== "string") { throw new Error("is(value, type) expects type to be a string"); }

        return typeOf(value) === type.toLowerCase();
    };

    return is;

});