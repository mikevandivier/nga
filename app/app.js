'use strict';

// Declare app level module which depends on views, and components
var nga = angular.module('nga', [
  'ngRoute',
  'nga.home',
  'nga.view1',
  'nga.view2',
  'nga.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

//ref: http://stackoverflow.com/questions/17910986/bootstrap-navbar-with-angularjs
nga.controller('NavCtrl', 
['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
      var currentRoute = $location.path().substring(1) || 'home';
      return page === currentRoute ? 'active' : '';
    };

    $scope.loadContact = function () {
        alert('You can contact me here: http://www.afterecon.com/user-survey/');
        //$location.url('/contact');
    };
}]);
