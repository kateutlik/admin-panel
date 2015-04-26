'use strict';

/**
 * @ngdoc function
 * @name adminPanelBublik.directive:clEditor
 * @description
 * # clEditor
 * Directive of the adminPanelBublik
 */
(function(){

  var app = angular.module('adminPanelBublik');

  app.directive('clEditor', function() {
    	return {
		restrict: 'AE',
		link: function(scope, elem, attrs){
			jQuery('#clEditor').cleditor({
			});
		}
	};
  });

})();