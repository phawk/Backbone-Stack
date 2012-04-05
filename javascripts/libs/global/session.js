/*  Filename: session.js
 *  Simple AMD library to use modern techniques for sessions in JS, with fallback to cookies
 *
 *  Currently supports Localstorage for persitence, will eventually support cookies for older browsers.
 *
 *  @created: Monday, 2nd April 2012
 *  @author: Pete Hawkins <pete@phawk.co.uk>
 */
define([], function(){
	return {

		set: function(key, value) {
			// #TODO Make this fallback to cookies
			return localStorage.setItem(key, value);
		},

		get: function(key) {
			// #TODO Make this fallback to cookies
			return localStorage.getItem(key);
		},

		remove: function(key) {
			// #TODO Make this fallback to cookies
			return localStorage.removeItem(key);
		}

	};
});