var app = angular.module('FoodJournal', []);

app.controller('MainController', ['$scope', function($scope) {
$scope.team = [
{
	name: 'Ryan Hall',
	hometown: 'Park City',
	avatar: 'images/ryan.jpg'
},
{
	name: 'Daniel Breen',
	hometown: 'Taylorsville',
	avatar: 'images/daniel.jpg'
},
{
	name: 'Brian',
	hometown: 'Salt Lake City',
	avatar: 'images/brian.jpg'

}];





}]);