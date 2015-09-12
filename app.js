var app = angular.module('FoodJournal', ['firebase']);

app.controller('MainController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

var ref = new Firebase("https://greenbean.firebaseio.com/");

$scope.inputs = $firebaseArray(ref);

$scope.mealTypes = [{name: "Breakfast"}, {name: "Lunch"},  {name: "Dinner"},  {name: "Snack"}];

$scope.feels = [{name: "Great"}, {name: "Good"}, {name: "Bad"}, {name: "Horrible"}, {name: "Not sure"}];

$scope.forms = function()
{
	var newForms = {};
console.log("function works");
	newForms.user 	= $scope.team.name;
	newForms.meal 	= $scope.meal.name;
	newForms.about 	= $scope.about;
	newForms.feel 	= $scope.feel.name;
	newForms.date 	= Date.now();

	var JSONnewForms = JSON.stringify(newForms);

	console.log(JSONnewForms);
	$scope.inputs.$add(JSONnewForms);

$scope.user = "";
$scope.meal = $scope.mealTypes[0];
$scope.about = "";
$scope.feel = $scope.feels[0];
Date.now() = "";
}
	
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
	name: 'Brian Rodriguez',
	hometown: 'Salt Lake City',
	avatar: 'images/brian.jpg'

}];





}]);