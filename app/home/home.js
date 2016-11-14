'use strict';

agGrid.initialiseAgGridWithAngular1(angular)                            // agGrid initialized inside the library loaded via script tag in index.html
angular.module('nga.home', ['ngRoute', 'agGrid'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  })
}])

.controller('HomeCtrl', ['$scope', function($scope) {                   //ref: http://stackoverflow.com/questions/16284769/angularjs-scope-undefined-when-controllers-are-inside-a-module
    let columnDefs;

    $scope.gridItems = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ]

    columnDefs = [
      {headerName: "Make", field: "make"},
      {headerName: "Model", field: "model"},
      {headerName: "Price", field: "price"}
    ]

    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: $scope.gridItems
    }

    $scope.addGridItem = function() {                                   //ref: http://www.w3schools.com/angular/tryit.asp?filename=try_ng_todo_app
      $scope.gridItems.push({
        make: $scope.gridItems.make,
        model: $scope.gridItems.model,
        price: $scope.gridItems.price,
        done: false
      });
      $scope.gridItems.make = ""
      $scope.gridItems.model = ""
      $scope.gridItems.price = ""
      refreshGrid()
    };

    $scope.removeGridItem = function() {
      var oArrOld = $scope.gridItems;

      $scope.gridItems = []
      angular.forEach(oArrOld, function(oItem) {
        if (!oItem.done) $scope.gridItems.push(oItem)
      })
      refreshGrid()
    }

    function refreshGrid() {
      $scope.gridOptions.api.setRowData($scope.gridItems)               //ref: http://stackoverflow.com/questions/35311052/how-to-upgrade-refresh-the-ag-grid-after-row-delete
      $scope.gridOptions.api.refreshView();                             //ref: https://www.ag-grid.com/javascript-grid-refresh/
    }
}])
