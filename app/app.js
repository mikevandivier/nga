'use strict';

// Declare app level module which depends on views, and components
angular.module('nga', [
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
