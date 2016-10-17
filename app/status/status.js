'use strict';

angular.module('nga.status', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/status', {
    templateUrl: 'status/status.html',
    controller: 'StatusCtrl'
  });
}])

.controller('StatusCtrl', [function() {

}]);