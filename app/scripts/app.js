'use strict';

/**
 * @ngdoc overview
 * @name feedbackFormApp
 * @description
 * # feedbackFormApp
 *
 * Main module of the application.
 */
(function() {

  angular
      .module('feedbackFormApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
      ])
      .config(function($routeProvider) {
        $routeProvider
            .when('/', {
              templateUrl: 'views/main.html',
              controller: 'MainCtrl'
            })
            .when('/about', {
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl'
            })
            .otherwise({
              redirectTo: '/'
            });
      });

})();