angular.module('fact.controller', [])
	.directive('result', function () {
		return{
			restrict: 'EA',
			templateUrl: 'views/tvresult.html'
		}
	})
	.controller('FactController', function ($scope, factResource) {
		$scope.getTVShow = function () {
			factResource.query({
				name: $scope.name1
			}, function (response) {
				$scope.fact = response;
			});	
		};
		// TODO Implement getTrivia and getDate
});