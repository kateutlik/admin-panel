'use strict';

/**
 * @ngdoc function
 * @name feedbackFormApp.controller:GuestsCtrl
 * @description
 * # GuestsCtrl
 * Controller of the feedbackFormApp
 */
(function() {
  angular.module('adminPanelBublik')
	.controller('GuestsCtrl', function($scope, $rootScope, $filter) {
		var orderBy = $filter('orderBy');

		$scope.guestsList = [
			{
				name: 'Катерина Утлик',
				count: 3,
				ceremony: true,
				party: false
			},
			{
				name: 'Александр Зенькович',
				count: 1,
				ceremony: true,
				party: false
			},
			{
				name: 'Иван Иванов',
				count: 4,
				ceremony: false,
				party: true
			},
			{
				name: 'Петр Петров',
				count: 1,
				ceremony: true,
				party: true
			},
			{
				name: 'Дмитрий Сидоров',
				count: 2,
				ceremony: true,
				party: true
			}
			
		];

		// $scope=""

		$scope.ceremonyGuests = 0;
		$scope.partyGuests = 0;
		$scope.guestsCount = 0;

		var guestsLength = $scope.guestsList.length; 

		for (var i = 0; i < guestsLength; i++) {
			$scope.guestsCount += $scope.guestsList[i].count;

			if ($scope.guestsList[i].ceremony) {
				$scope.ceremonyGuests += $scope.guestsList[i].count;
			};
			if ($scope.guestsList[i].party) {
				$scope.partyGuests += $scope.guestsList[i].count;
			};
		};

		$scope.order = function(predicate, reverse) {
			$scope.guestsList = orderBy($scope.guestsList, predicate, reverse);
		};


		// Build the chart
        // new Highcharts.Chart({
        //     chart: {
        //         plotBackgroundColor: null,
        //         plotBorderWidth: null,
        //         plotShadow: false
        //     },
        //     title: {
        //         text: 'График присутствия гостей'
        //     },
        //     tooltip: {
        //         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        //     },
        //     plotOptions: {
        //         pie: {
        //             allowPointSelect: true,
        //             cursor: 'pointer',
        //             dataLabels: {
        //                 enabled: false
        //             },
        //             showInLegend: true
        //         }
        //     },
        //     series: [{
        //         type: 'pie',
        //         name: 'Guests',
        //         data: [
        //             ['Будут на росписи', ceremonyGuests],
        //             ['Будут на вечеринке',  partyGuests],
        //         ]
        //     }]
        // });
			
	});
})();