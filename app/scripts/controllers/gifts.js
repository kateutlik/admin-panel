'use strict';

/**
 * @ngdoc function
 * @name adminPanelBublik.controller:GiftsCtrl
 * @description
 * # GiftsCtrl
 * Controller of the adminPanelBublik
 */
(function() {
  angular.module('adminPanelBublik')
	.controller('GiftsCtrl', function($scope, $rootScope) {
		$scope.gifts = [
			{
				src: 'http://technosider.com/uploads/images/00/00/03/2014/04/02/fa0e0e_orig.jpg',
				title: 'Телевизор Samsung',
				link: 'http://catalog.onliner.by/tv/samsung/ue48h6500'
			},
			{
				src: 'http://technosider.com/uploads/images/00/00/03/2014/04/02/fa0e0e_orig.jpg',
				title: 'Телевизор Samsung 2',
				link: 'http://catalog.onliner.by/tv/samsung/ue48h6500'
			}
			
		];

		$scope.saveData = function(event){
			jQuery(event.currentTarget).button('loading');
			$scope.gifts = $scope.gifts;
			setTimeout(function(){
				jQuery(event.currentTarget).button('reset');
			}, 1000);
		};

		$scope.addGift = function(){
			$scope.gifts.push({
				src: '',
				title: '',
				lick: ''
			});
		};

		$scope.removeGift = function(index){
      		$scope.gifts.splice(index, 1);
      	};
	});
})();


