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

$scope.activeUserFn = function(user) {
	$scope.activeUser = user;
	console.log($scope.activeUser);
	};


$scope.articles = [
{
	title: "Green Beans",
	sub: "What's Beneficial About Green Beans?",
	sections: [
	{
		header: "Nutritional breakdown of green beans",
		content: "According to the USDA National Nutrient Database, one cup of fresh green beans (about 100 grams) contains 31 calories, 0 grams of fat, 7 grams of carbohydrate, 3 grams of fiber, 3 grams of sugar and 2 grams of protein. Green beans are a rich source of vitamins A, C and K and also contain folate, thiamin, riboflavin, iron, magnesium and potassium."
	},
	{
		header: "Possible health benefits of consuming green beans",
		content: "Consuming fruits and vegetables of all kinds has long been associated with a reduced risk of many adverse health conditions. Many studies have suggested that increasing consumption of plant foods like green beans decreases the risk of obesity, diabetes, heart disease and overall mortality while promoting a healthy complexion, increased energy and overall lower weight."
	}]
}];

}]);