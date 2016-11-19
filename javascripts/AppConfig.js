"use strict";

console.log("loaded AppConfig.js");

app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
});