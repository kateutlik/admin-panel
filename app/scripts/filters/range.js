/**
 * @ngdoc filter
 * @name range
 * @function
 *
 * @description
 * Create a list containing arithmetic progressions. The arguments must 
 * be plain integers. If the step argument is omitted, it defaults to 1. 
 * If the start argument is omitted, it defaults to 0.
 *
 * @example
  ng-repeat="n in [] | range:1:30"
 */
(function(){
  angular.module('adminPanelBublik')
  .filter('range', function() {
    return function(input, start, stop, step) {
      if (isNaN(start)) {
        start = 0;
      }
      if (isNaN(stop)) {
        stop = start;
        start = 0;
      }
      if (isNaN(step)) {
        step = 1;
      }
      if ((step > 0 && start >= stop) || (step < 0 && start <= stop)){
        return [];
      }
      for (var i = start; step > 0 ? i < stop : i > stop; i += step){
        input.push(i);
      }
      return input;
    };
  });
})();