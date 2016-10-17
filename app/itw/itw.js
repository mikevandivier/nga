'use strict';

angular.module('nga.itw', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/itw', {
    templateUrl: 'itw/itw.html',
    controller: 'ITWCtrl'
  });
}])

.controller('ITWCtrl', [function() {

}]);