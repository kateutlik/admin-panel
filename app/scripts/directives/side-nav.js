'use strict';

/**
 * @ngdoc function
 * @name adminPanelBublik.directive:sideNav
 * @description
 * # sideNav
 * Directive of the adminPanelBublik
 */
(function(){

  var app = angular.module('adminPanelBublik');

  app.directive('sideNav', function() {
    return {
      restrict: 'A',
      templateUrl: '../../templates/side-nav.html'
    };
  });

})();