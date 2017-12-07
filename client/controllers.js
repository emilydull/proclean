angular.module('ProClean.controllers', [])

.controller('ContactController', ['$scope', 'ContactForm', '$anchorScroll', function($scope, ContactForm, $anchorScroll) {
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
			alert('Thank you for your message!');
		}, function(err) {
			console.log(err);
		})
	}
}])