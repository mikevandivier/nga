'use strict';

agGrid.initialiseAgGridWithAngular1(angular)                            // agGrid initialized inside the library loaded via script tag in index.html

angular.module('nga.agGrid', ['agGrid'])

.controller('gridController', function($scope) {

    var columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ]

    var rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ]

    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData
    }

});