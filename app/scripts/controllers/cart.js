'use strict';

/**
 * @ngdoc function
 * @name feedbackFormApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the feedbackFormApp
 */
(function() {
  angular.module('feedbackFormApp')
      .controller('CartCtrl', function($scope, $rootScope) {
//        $rootScope.header = 'Your order';

        $scope.removeFromCart = function($index){
          $scope.orderList[$index] = 0;
        }
      });
})();