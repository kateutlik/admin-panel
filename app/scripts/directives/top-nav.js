'use strict';

/**
 * @ngdoc function
 * @name adminPanelBublik.directive:Header
 * @description
 * # Header
 * Directive of the adminPanelBublik
 */
(function(){

  var app = angular.module('adminPanelBublik');

  app.directive('topNav', function() {
    return {
      restrict: 'A',
      templateUrl: '../../templates/top-nav.html'
    };
  });

})();
