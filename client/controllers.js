angular.module('ProClean.controllers', [])
.controller('ContactController', ['$scope', 'ContactForm', function($scope, ContactForm) {
	$scope.send = function() {
		let contact = new ContactForm({
			from: $scope.email,
			name: $scope.name,
			phone: $scope.phone, 
			message: $scope.message
		});

		contact.$save(function() {
			alert('Thank you for your message!')
		}, function(err) {
			console.log(err);
		})
	}
}])