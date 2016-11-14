'use strict';

angular.module('nga.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  })
}])

.controller('HomeCtrl', ['$scope', function($scope) {                   //ref: http://stackoverflow.com/questions/16284769/angularjs-scope-undefined-when-controllers-are-inside-a-module
  
    $scope.todoList = [{todoText:'Clean House', done:false}]

    $scope.todoAdd = function() {                                       //ref: http://www.w3schools.com/angular/tryit.asp?filename=try_ng_todo_app
        $scope.todoList.push({todoText:$scope.todoInput, done:false})
        $scope.todoInput = ""
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;

        $scope.todoList = []
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x)
        })
    }
    
}])
