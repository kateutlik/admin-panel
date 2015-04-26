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
      .module('adminPanelBublik', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap'
      ])
      .config(function($routeProvider) {
        $routeProvider
            .when('/', {
              templateUrl: 'views/home.html',
              controller: 'HomeCtrl'
            })
            .when('/inform', {
              templateUrl: 'views/inform.html',
              controller: 'InformCtrl'
            })
            .when('/program', {
              templateUrl: 'views/program.html',
              controller: 'ProgramCtrl'
            })
            .when('/guests-list', {
              templateUrl: 'views/guests-list.html',
              controller: 'GuestsCtrl'
            })
            .when('/gifts', {
              templateUrl: 'views/gifts.html',
              controller: 'GiftsCtrl'
            })
            .when('/seating-plan', {
              templateUrl: 'views/seating-plan.html',
              controller: 'SeatingPlanCtrl'
            })
            .when('/mailing', {
              templateUrl: 'views/mailing.html',
              controller: 'MailingCtrl'
            })
            .otherwise({
              templateUrl: 'views/404.html',
              controller: 'NotFoundCtrl'
            });
      });


    
})();