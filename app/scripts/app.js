'use strict';

/**
 * @ngdoc overview
 * @name pvfmApp
 * @description
 * # pvfmApp
 *
 * Main module of the application.
 */
angular
  .module('pvfmApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'leaflet-directive'
    ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'VendorCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
