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
    {image: 'images/carrots.png'},
    {image: 'images/glamor-bread.png'},{image: 'images/happy.png'},
    {image: 'images/peppers.png'},{image: 'images/strawberries.png'}];

 });
