var app = angular.module('myApp');

app.controller('myCtrl',function($scope) {
  
});;
// Home Service -> ngResource
var app = angular.module('myApp');
app.factory('MyService', function($resource) {
  var data = $resource(
  	usersRest, // Variable from api.endpoints.js
  	{user: '@user'}, 
  	{ 
      
  		update: { 
				method: 'PUT'
			},

      remove: {
        method: 'DELETE'
      }
	  }
  );
  return data;
});;
// REST API ROUTES
;
// App routes -> UI Route Provider
var app = angular.module('myApp');

	app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/home.view.html'
        });
	});