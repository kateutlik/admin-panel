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
            .when('/home', {
              templateUrl: 'views/main.html',
              controller: 'HomeCtrl'
            })
            .when('/about', {
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl'
            })
            .when('/cart', {
              templateUrl: 'views/cart.html',
              controller: 'CartCtrl'
            })
            .otherwise({
              redirectTo: '/home'
            });
      });


    var popoverTemplate = '<div class="popover" role="tooltip">\
                              <div class="arrow"></div>\
                              <h3 class="title">Войти как администратор</h3>\
                              <div class="content">\
                                <form id="adminSignIn">\
                                  <div class="form-group">\
                                    <label for="adminLogin">Login</label>\
                                    <input type="text" class="form-control" id="adminLogin" placeholder="Login">\
                                  </div>\
                                  <div class="form-group">\
                                    <label for="adminPass">Password</label>\
                                    <input type="password" class="form-control" id="adminPass" placeholder="Password">\
                                  </div>\
                                </form>\
                              </div>\
                              </div>\
                            </div>';

    $('[data-toggle="popover"]').popover({template: popoverTemplate});
})();