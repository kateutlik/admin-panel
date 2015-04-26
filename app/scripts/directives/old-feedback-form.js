'use strict';

/**
 * @ngdoc function
 * @name feedbackFormApp.directive:feedbackForm
 * @description
 * # feedbackForm
 * Directive of the feedbackFormApp
 */
(function(){

var app = angular.module('adminPanelBublik');

app.directive('feedbackForm', function() {
  return {
    restrict: 'E',
    templateUrl: '../../templates/feedback-form.html'
  };
});

})();