'use strict';

/**
 * @ngdoc function
 * @name adminPanelBublik.controller:InformCtrl
 * @description
 * # InformCtrl
 * Controller of the adminPanelBublik
 */
(function() {
	angular.module('adminPanelBublik')
		.controller('InformCtrl', function($scope, $rootScope) {
			
			// var getData = $rootScope.getData('inform');
			var data = [
						'Дата свадьбы;Имя жениха;Имя невесты;История жениха;История невесты;Время бракосочетания;Время вечеринки',
						'3.12.2014;Анастасия;Евгений;Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я.;Когда от милой моей долины поднимается пар и пол-дневное солнце стоит над непроницаемой чащей темного леса и лишь редкий луч проскальзывает в его святая святых.;16:00 - 17:00;18:00 - 23:00'];

			$scope.dataTitles = data[0].split(';');
			$scope.dataValues = data[1].split(';');

			// .factory("factory", function($http, $q){

			// 	var user = {

			// 		getUserInfo: function(){

			// 			var deferred = $q.defer();

			// 			$http.get("1.json").success(function(){

			// 				deferred.promise.resolve();

			// 			}).error(function(){

			// 				deferred.promise.reject();

			// 			})

			// 			return deferred.promise;



			// 		}


			// 	}

			// 	return user;

			// })

		});
})();
