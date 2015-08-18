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
    image: 'images/fish.png',
    vendors: ['One Ocean Seafood', 'Markegard Meats']},

    {name: 'Specialty Items',
    image: 'images/beer.png',
    vendors: ["Nut 'n Bean", 'Golden State Brewery']},

    {name: 'Bakery & Sweets',
    image: 'images/bread.png',
    vendors: ["Flower Child", 'Bread Dude']},

    {name: 'Food Trucks',
    image: 'images/food-truck.png',
    vendors: ["Rollie Roadie", 'Big Daddy Taco Truck']},

    {name: 'Crafts',
    image: 'images/sewing-machine.png',
    vendors: ['Wild Woman Pottery', "Mike's Bazooka Emporium"]}
    ];

    $scope.showGroup = function(group) {

     if ($scope.isCollapsed) {
        $scope.targetGroup = group.vendors;
        $scope.isCollapsed = false;
    }

    else {
        $scope.isCollapsed = true;
        $scope.targetGroup = {};
    }
};


});
