/*  Filename: notification.js
 *  Simple AMD library to alert notifications to the user
 *
 *  @created: Monday, 2nd April 2012
 *  @author: Pete Hawkins <pete@phawk.co.uk>
 */
define(['jquery', 'handlebars', 'text!templates/notifications/alert.html'], function($, Handlebars, alertNotificationTemplate){
	return {

		template: Handlebars.compile(alertNotificationTemplate),

		/*  Alert
		 *
		 *  Displays notifications on screen for the user
		 *
		 *  @type: = "success", "info", "alert".
		 */
		alert: function(type, message, header) {
			// Show a notification to the user
			$('.main-body').prepend(this.template({ type: type, message: message, header: header }));
			$('.jNotify').slideDown('fast');

			// Bind events
			$('.jNotify .close').click(function(e){
				e.preventDefault();

				$(this).parent().slideUp('fast', function(){
					$(this).remove();
				});
			});
		}

	};
});