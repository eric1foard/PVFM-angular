'use strict';

/**
 * @ngdoc function
 * @name pvfmApp.controller:vendorCtrl
 * @description
 * # vendorCtrl
 * Controller of the pvfmApp
 */
 angular.module('pvfmApp')
 .controller('VendorCtrl', function ($scope) {

 	$scope.isCollapsed = true;
    $scope.targetGroup = [];

    $scope.vendorGroups = [
    {name: 'Fruit & Veggies',
    image: 'images/fruit.png',
    vendors: ['Rio de Parros', 'Webb Ranch']},

    {name: 'Meat & Fish',
    image: 'images/Fish.png',
    vendors: ['One Ocean Seafood', 'Markegard Meats']},

    {name: 'Specialty Items',
    image: 'images/Beer.png',
    vendors: ["Nut 'n Bean", 'Golden State Brewery']},

    {name: 'Bakery & Sweets',
    image: 'images/Bread.png',
    vendors: ["Flower Child", 'Bread Dude']},

    {name: 'Food Trucks',
    image: 'images/Food-Truck.png',
    vendors: ["Rollie Roadie", 'Big Daddy Taco Truck']},

    {name: 'Crafts',
    image: 'images/Sewing-Machine.png',
    vendors: ['Wild Woman Pottery', "Mike's Bazooka Emporium"]}
    ];

    $scope.showGroup = function(group) {

        if (!$scope.isCollapsed && $scope.targetGroup === group) {
            $scope.isCollapsed = true;
            $scope.targetGroup = {};
        }

        else if (!$scope.isCollapsed && $scope.targetGroup !== group) {
            $scope.targetGroup = group;
        }

        else {
            $scope.isCollapsed = false;
            $scope.targetGroup = group;
        }
    };


});
