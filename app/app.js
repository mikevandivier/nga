'use strict';

// Declare app level module which depends on views, and components
angular.module('nga', [
  'ngRoute',
  'nga.home',
  'nga.planning',
  'nga.status',
  'nga.itw',
  'nga.version',
  'nga.agGrid'
]).

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
}])

.controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {           //ref: http://stackoverflow.com/questions/17910986/bootstrap-navbar-with-angularjs

    $scope.isActive = function (sClickedPage) {                                         //ref: http://stackoverflow.com/questions/16199418/how-to-set-bootstrap-navbar-active-class-with-angular-js
      let sRouteLocation = $location.path();
      console.log(sClickedPage)
      console.log(sRouteLocation)
      return sRouteLocation.indexOf(sClickedPage) === 1;                                //=== 1 allows home to match /home
    }

    $scope.loadContact = function () {
      alert('You can contact me here: http://www.afterecon.com/user-survey/')
    }
}])
