angular.module('Filters', []).filter('input.date', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});