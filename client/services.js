angular.module('ProClean.services', [])
.service('SEOService', ['$rootScope', function($rootScope) {
    this.setSEO = function(data) {
        $rootScope.seo = {}; //is an empty object
        for (let p in data) { //for..in loop p = prop (the property names, not the value of the properties)
            $rootScope.seo[p] = data[p];
        }
    };
}])
