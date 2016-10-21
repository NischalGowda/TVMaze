angular.module('app', 
	['ngRoute', 'ngResource', 'fact.controller', 'fact.service', 'favorites.controller', 'schedule.controller', 'show.controller', 'show.service'])
	.filter('trustHTML', function($sce)
	{
		return function(text)
		{
			return $sce.trustAsHtml(text)
		}
	})
	.config(['$routeProvider', '$locationProvider', 
		function ($routeProvider, $locationProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'views/fact.html',
					controller: 'FactController'
				})
				.when('/favorites', {
					templateUrl: 'views/favorites.html',
					controller: 'FavoritesController'
				})
				.when('/schedule', {
					templateUrl: 'views/schedule.html',
					controller: 'ScheduleController'
				})
				.when('/shows/:id', {
					templateUrl: 'views/show.html',
					controller: 'ShowController',
					resolve: {
						shows: function ($route, ShowService) {
							return ShowService.get({id: $route.current.params.id});
						}
					}
				})
				.otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
	}]);

	