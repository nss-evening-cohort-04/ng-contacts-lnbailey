"use strict";

console.log("loaded ContactCtrl.js");

app.controller("ContactCtrl", function($scope, PeopleFactory){
	// $scope.newPerson = {};
	$scope.people = [];

	let getPeople = function(){
		PeopleFactory.getPeopleList().then(function(fbPeople){
			$scope.people.fbPeople;
			console.log("getPeople function");
		});
	};

	getPeople();


// 	$scope.addNewPerson = function(){
// 		PeopleFactory.postNewPerson($scope.newPerson).then(function(personId){
// 			getPeople();
// 			$scope.newPerson = {};
// 		});
// 	};

});



// non Firebase data

// var app = angular.module("ContactApp", []);

// app.controller("ContactCtrl", function($scope){
// 	$scope.newPerson={};
// 	$scope.people=[
// 		{
// 			id: 0,
// 			name:"Herman Munster",
// 			address: "1313 Mockingbird Lane, Hollywood, CA",
// 			phone: "323-555-5555"
// 		},
// 		{
// 			id: 1,
// 			name:"Sherlock Holmes",
// 			address: "221 Baker St, London, England",
// 			phone: "01 44 207 224 3688"
// 		},
// 		{
// 			id: 2,
// 			name:"Bruce Wayne",
// 			address: "1007 Mountain Drive, Gotham City, NJ",
// 			phone: "212-123-4567"
// 		},
// 		{
// 			id: 3,
// 			name:"Fox Mulder",
// 			address: "2630 Hegal Place, Apt 42, Alexandria, Virginia",
// 			phone: "202-555-9355"
// 		}
// 	];


	// $scope.addNewPerson=function(){
	// 	$scope.newPerson.id=$scope.people.length;
	// 	console.log("newPerson in function", $scope.newPerson);
	// 	$scope.people.push($scope.newPerson);
	// 	$scope.newPerson={};

	// };
//