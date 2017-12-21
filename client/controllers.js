angular.module('ProClean.controllers', [])

.controller('ContactController', ['$scope', 'ContactForm', '$anchorScroll', '$location', 'SEOService', function($scope, ContactForm, $anchorScroll, $location, SEOService) {
	$anchorScroll('top');
	$anchorScroll('#top');

	$scope.send = function() {
		let contact = new ContactForm({
			from: $scope.email,
			name: $scope.name,
			phone: $scope.phone, 
			message: $scope.message
		});

		contact.$save(function() {
			$scope.email = "";
			$scope.message = "";
		}, function(err) {
			console.log(err);
		})
	}

	SEOService.setSEO({
		title: 'ProClean Pressure Washing',
		description: 'Description', //TODO
		url: $location.url()
	});

}])