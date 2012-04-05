define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var userModel = Backbone.Model.extend({
    defaults: {
      email: null,
      password: null,
      town: null,
      city: null,
      country: null,
      full_name: null,
      display_name: null,
      mobile: null
    },
    /*validate: function(attrs) {
      // Run validation for user
      console.log(attrs);
    },*/
    setUserData: function(data) {
      for (var i = 0, dataLength = data.length; i < dataLength; i++)
      {
        var attr = data[i],
            obj = {};

        // Check the field exists for model
        if (this.defaults[attr.name] !== undefined)
        {
          console.log('setting: '+attr.name+' to: '+attr.value);
          obj[attr.name] = attr.value;
          // Set the attribute
          this.set(obj);
        }
      }
    }
  });
  return userModel;
});