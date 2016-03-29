'use strict';

/**
 * @ngdoc function
 * @name pvfmApp.controller:PhotoCtrl
 * @description
 * # PhotoCtrl
 * Controller of the pvfmApp
 */
 angular.module('pvfmApp')
 .controller('PhotoCtrl', function ($scope) {

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.slides = [
    {image: 'images/coffee.png'},
    {image: 'images/strawberries1.jpeg'},
    {image: 'images/mmm_chicken.jpeg'},
    {image: 'images/cute_sign.jpeg'},
    {image: 'images/sky.png'},
    {image: 'images/squash.png'}
  ];
 });
