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

 	$scope.isCollapsed = false;
    $scope.vendorGroups = [
    {name: 'Farm Produce',
    image: 'images/fruit.png',
    selection: true,
    vendors: [
    'Webb Ranch',
    'Crescent Farm',
    'Rio de Parras',
    'Specialty Produce',
    'Smit Farm',
    'Sunrise Farm',
    'Half Moon Harvest',
    'Green Eggs-n-Jam',
    'local honey',
    'Bill the Bulb Baron',
    'Winters Fruit Tree (nuts)'
]},

    {name: 'Meat & Fish',
    image: 'images/Fish.png',
    selection: false,
    vendors: ["Victorian Farmstead Meats",
    "One Ocean Seafood",
    "Haley's Sausage Co."]},

    {name: 'Specialty Items',
    image: 'images/Beer.png',
    selection: false,
    vendors: ["Portola Vineyards",
        "Sinbad Catering",
    "Nut 'n Bean",
    "High Note Coffee",
    "Milliken Creek Vineyards",
    "Santa Cruz Pasta Factory",
    "Karnival Popcorn"]},

    {name: 'Bakery & Sweets',
    image: 'images/Bread.png',
    selection: false,
    vendors: [
    "Flourchylde Bakery",
    "Noble Treats Dog Biscuits",
    "Tantalizing Toffee",
    "Spoon & Spatula Bakery",
    "Kidding Around with Chocolate",
    "Shampa's Pies"]},

    {name: 'Food Trucks',
    image: 'images/Food-Truck.png',
    selection: false,
    vendors: ["Roli Roti (hot rotisserie chicken and potatoes)"]},

    {name: 'Crafts',
    image: 'images/Sewing-Machine.png',
    selection: false,
    vendors: [
        "Body and Soul Apothecary",
        "Knife Sharpening by Jim Adams",
        "Jen Raynes Art",
        "J. Carruthers Floral",
    "Earth’s Sister Handbags",
    "Kathena Avelon Jewelry",
    "Dream Light Jewelry",
    "Nancy Wilder Designs",
    "Zubrub",
    "Route One Pumpkin Soaps & Lotion"]}
    ];

    $scope.targetGroup = $scope.vendorGroups[0];

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

    $scope.updateSelect = function(group) {

        $scope.vendorGroups.forEach(function(elt) {
            elt.selection = false;
        });

        group.selection = !$scope.isCollapsed;
    };


});
