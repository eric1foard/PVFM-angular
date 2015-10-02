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
    {image: 'images/peppers1.png'},
    {image: 'images/tomatoes.png'},
    {image: 'images/peppers.png'},
    {image: 'images/sky.png'},
    {image: 'images/squash.png'}
  ];
 });
