'use strict';

/**
 * @ngdoc controller
 * @name adminPanelBublik.controller:SeatingPlanCtrl
 * @description
 * # SeatingPlanCtrl
 * Controller of the adminPanelBublik
 */
(function() {
  angular.module('adminPanelBublik')
	.controller('SeatingPlanCtrl', function($scope, $rootScope) {
		var emptyTable = false;

		$scope.tables = [
		{
			id: 0,
			form: 'round',
			chairsCount: 6,
			guests: "Зенькович Александр;Утлик Екатерина;Фалейчик Александр;;;",
			name: "Стол №1",

		},
		{
			id: 1,
			form: 'square',
			chairsCount: 8,
			guests: "Зенькович Александр;Утлик Екатерина;Фалейчик Александр;;;",
			name: "Стол №2",
		},
		{
			id: 0,
			form: 'round',
			chairsCount: 6,
			guests: "Зенькович Александр;Утлик Екатерина;Фалейчик Александр;;;",
			name: "Стол №1",

		},
		{
			id: 1,
			form: 'square',
			chairsCount: 8,
			guests: "Зенькович Александр;Утлик Екатерина;Фалейчик Александр;;;",
			name: "Стол №2",
		},
		{
			id: 0,
			form: 'round',
			chairsCount: 6,
			guests: "Зенькович Александр;Утлик Екатерина;Фалейчик Александр;;;",
			name: "Стол №1",

		},
		{
			id: 1,
			form: 'square',
			chairsCount: 8,
			guests: "Зенькович Александр;Утлик Екатерина;Фалейчик Александр;;;",
			name: "Стол №2",
		}
		];

		$scope.guests = ['Катерина Утлик','Александр Зенькович','Иван Иванов','Петр Петров','Дмитрий Сидоров'];

		angular.forEach($scope.tables, function(value, i){
			var guestsArray = [];

			value.isEditGuest = [];

			guestsArray = value.guests.split(';');
			value.guests = guestsArray;

			angular.forEach(guestsArray, function() {
				value.isEditGuest.push(false);
			});
		});

		var saveTable = function(e, table, index) {
			$scope.tables[index] = table;

		};

		var cancelTable = function(e, index){
			if (emptyTable){
				$scope.tables.splice(index, 1);
				emptyTable = false;
			}

		}

		$scope.editTable = function(index){
			if (index === -1) {
				index = $scope.tables.push({
					form: '',
					chairsCount: '',
					name: '',
				});
				index--;
				emptyTable = true;
			}
			var table = $scope.tables[index];
			$rootScope.$broadcast('openModalTable', table, index, $scope.guests);
		};

		$scope.removeTable = function(index){
			$scope.tables.splice(index, 1);
		};

		$scope.removeGuest = function(table, index) {
			table.guests[index] = '';
		}

		$scope.saveGuest = function(table, index) {
			table.isEditGuest[index] = false;
		}

		$scope.editGuest = function(table, index) {
			table.isEditGuest[index] = true;
		}


		$scope.$on('modalCancel', cancelTable);
		$scope.$on('modalOk', saveTable);
	});
})();


