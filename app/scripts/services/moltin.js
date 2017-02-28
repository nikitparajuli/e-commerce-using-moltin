'use strict';
angular.module('storeforntApp.moltin', [])
	.factory('MoltinAuth', function($q){
		//Create a deferred object
		var deferred = $q.defer();
		var moltin = new Moltin({publicId: 'HFCbigfwBCyHMv2OuWpLheM7oGKdzuJgcoGTnqWuFQ'});
		moltin.Authenticate(function(){
			deferred.resolve(moltin);
		});
		return deferred.promise;
	});