'use strict';

/**
 * @ngdoc function
 * @name adminPanelBublik.directive:guestsChart
 * @description
 * # guestsChart
 * Directive of the adminPanelBublik
 */
(function(){

  var app = angular.module('adminPanelBublik');

  app.directive('guestsChart', function() {
    	return {
		restrict: 'AE',
		link: function(scope, elem, attrs){
			/* Highcharts options */
			new Highcharts.Chart({
				chart: {
					renderTo: elem[0],
	                plotBackgroundColor: null,
	                plotBorderWidth: null,
	                plotShadow: false
	            },
				credits: {
					enabled: false
				},
	            title: {
	                text: 'График присутствия гостей'
	            },
	            tooltip: {
	                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	            },
	            plotOptions: {
	                pie: {
	                    allowPointSelect: true,
	                    cursor: 'pointer',
	                    showInLegend: false,
	                    dataLabels: {
		                    enabled: true,
		                    format: '{point.name}:<br />{point.y} гостя',
		                    style: {
		                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                    }
		                },
		                colors: ['#1ABC9C', '#8E44AD']
	                },
	            },
	            series: [{
	                type: 'pie',
	                name: 'Гости',
	                data: [
	                    [attrs['nameFirst'], parseInt(attrs['amountFirst'])],
	                    [attrs['nameSecond'], parseInt(attrs['amountSecond'])],
	                ]
	            }],
	            navigation: {
		            buttonOptions: {
		                enabled: false
		            }
		        }
			});
		}
	};
  });

})();