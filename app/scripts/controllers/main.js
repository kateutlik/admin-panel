'use strict';

/**
 * @ngdoc function
 * @name feedbackFormApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the feedbackFormApp
 */
(function() {
  angular.module('adminPanelBublik')
      .controller('MainCtrl', function($scope, $location, $rootScope) {
        $scope.menuClass = function(page) {
          var current = $location.path().substring(1);
          return page === current ? 'active' : '';
        };

        $rootScope.developerName = 'Bublik Studio';
        $rootScope.header = 'Bublik Studio CMS';



        $scope.products = [
          {
            imageUrl: '../../images/product-1.jpeg',
            title: 'Sed malesuada',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec elit vitae sem posuere laoreet ' +
                         'quis viverra quam.'
          },
          {
            imageUrl: '../../images/product-2.jpeg',
            title: 'Cras euismod venenatis',
            description: 'Vivamus at odio vitae elit gravida volutpat. Suspendisse sagittis orci vel ligula varius, et gravida ' +
                         'nibh scelerisque. Donec commodo magna sit amet tellus dignissim lobortis.'
          },
          {
            imageUrl: '../../images/product-3.jpg',
            title: 'Nulla varius nisl',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec elit vitae sem posuere laoreet ' +
                         'quis viverra quam.'
          },
          {
            imageUrl: '../../images/product-4.jpeg',
            title: ' Phasellus malesuada mi',
            description: 'Vivamus at odio vitae elit gravida volutpat. Suspendisse sagittis orci vel ligula varius, et gravida ' +
                         'nibh scelerisque. Donec commodo magna sit amet tellus dignissim lobortis.'
          },
          {
            imageUrl: '../../images/product-5.jpeg',
            title: 'Ut laoreet mauris',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec elit vitae sem posuere laoreet ' +
                         'quis viverra quam.'
          },
          {
            imageUrl: '../../images/product-6.jpg',
            title: 'Mauris sit amet',
            description: 'Vivamus at odio vitae elit gravida volutpat. Suspendisse sagittis orci vel ligula varius, et gravida ' +
                         'nibh scelerisque. Donec commodo magna sit amet tellus dignissim lobortis.'
          },
          {
            imageUrl: '../../images/product-7.jpg',
            title: 'Nulla quis sapien',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec elit vitae sem posuere laoreet ' +
                         'quis viverra quam.'
          },
          {
            imageUrl: '../../images/product-8.jpg',
            title: 'Vestibulum vel justo',
            description: 'Vivamus at odio vitae elit gravida volutpat. Suspendisse sagittis orci vel ligula varius, et gravida ' +
                         'nibh scelerisque. Donec commodo magna sit amet tellus dignissim lobortis.'
          }
        ];

        $scope.orderList = [];

        for(var i = 0; i < $scope.products.length; i++){
          $scope.orderList.push(0);
        }

      });

})();


