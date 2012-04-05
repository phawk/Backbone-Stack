/*  Filename: globals.js
 *  Simple way of including global objects within one definition in require js
 *
 *  @created: Monday, 2nd April 2012
 *  @author: Pete Hawkins <pete@phawk.co.uk>
 */
define(['./libs/global/session', 
		'./libs/global/api', 
		'./libs/global/notification'], 
function(session, api, notification){
	return {
		session: session,
		api: api,
		notification: notification,
	};
});