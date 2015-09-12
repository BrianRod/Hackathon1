var app = angular.module('FoodJournal', []);

app.controller('MainController', 'Filters',['$scope', function($scope) {

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
	name: 'Brian Rod',
	hometown: 'Salt Lake City',
	avatar: 'images/brian.jpg'

}];

$scope.inputs = [
{
	user: "Ryan",
	meal: "Breakfast",
	about: "Egg sandwhich, coffee",
	feel: "Good",
	date: "9/12/2015",
	img: "food.img"
},
{
	user: "Ryan",
	meal: "Lunch",
	about: "Pizza, beer",
	feel: "Bad",
	date: "9/12/2015",
	img: "food.img"
},
{
	user: "Ryan",
	meal: "Dinner",
	about: "Burger, soda",
	feel: "Unsure",
	date: "9/12/2015",
	img: "food.img"
}];


}]);