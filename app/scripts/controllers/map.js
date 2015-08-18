'use strict';

/**
 * @ngdoc function
 * @name pvfmApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the pvfmApp
 */
 angular.module('pvfmApp')
 .controller('MapCtrl', function ($scope) {

    $scope.center = {
            lat: 37.382468,
        lng: -122.228823,
            zoom: 12,
        };

    $scope.markers = { 
        marker: {
        lat: 37.382468,
        lng: -122.228823,
        focus: true
    }};

 });
