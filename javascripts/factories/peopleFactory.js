"use strict";

console.log("loaded peopleFactory.js");

app.factory("PeopleFactory", function($q, $http, FIREBASE_CONFIG){

	var getPeopleList = function(){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/people.json`)
			.success(function(response){
				let people=[];
				Object.keys(response).forEach(function(key){
					response[key].id=key;
					people.push(response[key]);
				});
				resolve(people);
				console.log("from PeopleFactory:", response);	
			})
			.error(function(errorResponse){
				reject(errorResponse);
			});
		});
	};



	// var postNewPerson = function(newPerson){
	// 	return $q((resolve, reject)=>{
	// 		$http.post(`${FIREBASE_CONFIG.databaseURL}/people.json`,
	// 			JSON.stringify({
	// 				name: newPerson.name,
	// 				address: newPerson.address,
	// 				phone: newPerson.phone
	// 			})
	// 			)
	// 		.success(function(postResponse){
	// 				resolve(postResponse);
	// 			})
	// 			.error(function(postError){
	// 				reject(postError);
	// 			});
	// 		});
	// 	};

return {getPeopleList:getPeopleList};

});