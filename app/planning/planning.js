'use strict';

angular.module('nga.planning', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/planning', {
    templateUrl: 'planning/planning.html',
    controller: 'PlanningCtrl'
  });
}])

.controller('PlanningCtrl', [function() {

}]);