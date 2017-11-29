angular.module('ProClean.directives', [])
.directive('mainNav', [function() {
	return {
		templateUrl: 'directives/nav.html',
		restrict: 'E', 
	};
}])

.directive('mainFooter', [function() {
	return {
		templateUrl: 'directives/footer.html',
		restrict: 'E',
	};
}])