'use strict';

/**
 * @ngdoc function
 * @name adminPanelBublik.controller:ModalDemoCtrl
 * @description
 * # ModalDemoCtrl
 * Controller of the adminPanelBublik
 */
  angular.module('adminPanelBublik')
    .controller('ModalTableCtrl', function($scope, $rootScope, $modal, $log) {

    var open = function (event, table, index, guests) {
      $scope.table = table;
      $scope.guests = guests;
      $scope.index = index;

      var modalInstance = $modal.open({
        templateUrl: '../templates/modal-table.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          table: function () {
            return $scope.table;
          },
          guests: function () {
            return $scope.guests;
          },
          index: function(){
            return $scope.index;
          }
        }
      });

      modalInstance.result.then(function(selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.$on('openModalTable', open);
  });
  // Please note that $modalInstance represents a modal window (instance) dependency.
  // It is not the same as the $modal service used above.

  angular.module('adminPanelBublik').controller('ModalInstanceCtrl', function($scope, $rootScope, $modalInstance, table, index, guests) {
    $scope.table = jQuery.extend({}, table);
    $scope.guests = guests;

    $scope.formOptions = [
      { label: 'Круглый', value: 'round' },
      { label: 'Квадратный', value: 'square' }
    ];

    $scope.ok = function () {
      $rootScope.$broadcast('modalOk', $scope.table, index);
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $rootScope.$broadcast('modalCancel', index);
      $modalInstance.dismiss('cancel');
    };
  });