/**
 * @ngdoc function
 * @title adminPanelBublik.controller:ProgramCtrl
 * @description
 * # ProgramCtrl
 * Controller of the adminPanelBublik
 */
(function() {
  angular.module('adminPanelBublik')
      .controller('ProgramCtrl', function($scope, $rootScope) {
      	$scope.ifEdit = false;

      	$scope.programList = [
      	{
      		title: 'Встреча гостей',
      		time: new Date(1970, 0, 1, 13, 00, 0)
      	},
      	{
      		title: 'Торжественная церемония бракосочетания',
      		time: new Date(1970, 0, 1, 14, 00, 0)
      	},
      	{
      		title: 'Фотосессия с молодоженами',
      		time: new Date(1970, 0, 1, 16, 00, 0)
      	},
      	{
      		title: 'Праздничная вечеринка',
      		time: new Date(1970, 0, 1, 18, 00, 0)
      	},
      	{
      		title: 'Аукцион',
      		time: new Date(1970, 0, 1, 20, 30, 0)
      	},
      	]

      	$scope.removeEvent = function(index){
      		$scope.programList.splice(index, 1);
      	}

      	$scope.addEvent = function(){
      		$scope.programList.push({title:'',time:''})
      	}

      });
})();