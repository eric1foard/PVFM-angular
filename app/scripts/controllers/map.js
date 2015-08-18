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
            focus: true,
            icon: {
                iconUrl: 'images/leaf-green.png',
                shadowUrl: 'images/leaf-shadow.png',
                    iconSize:     [38, 95], // size of the icon
                    shadowSize:   [50, 64], // size of the shadow
                    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                    shadowAnchor: [4, 62],  // the same for the shadow
                    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
                }
            }};

    $scope.tiles = {
        name: 'watercolor',
        url: 'http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',
        type: 'xyz'
    };


    $scope.$watch("center.zoom", function(zoom) {
        $scope.tiles.url = (zoom > 12)? "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        : "http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png";
    });

        });
