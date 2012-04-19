
/*
Filename: session.js
Simple AMD library to use modern techniques for sessions in JS, with fallback to cookies

Currently supports Localstorage for persitence, will eventually support cookies for older browsers.

@created: Monday, 2nd April 2012
@author: Pete Hawkins <pete@phawk.co.uk>
*/


(function() {

  define(function() {
    return {
      set: function(key, value) {
        return localStorage.setItem(key, value);
      },
      get: function(key) {
        return localStorage.getItem(key);
      },
      remove: function(key) {
        return localStorage.removeItem(key);
      }
    };
  });

}).call(this);
