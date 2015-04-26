'use strict';

/**
 * @ngdoc function
 * @name adminPanelBublik.directive:guestsChart
 * @description
 * # guestsChart
 * Directive of the adminPanelBublik
 */
(function(){

  var app = angular.module('adminPanelBublik');

  app.filter('boolToWord', function() {
	return function(input) {
		return input ? '\u0414\u0430' : '\u041D\u0435\u0442';
		};
	});
})();