"use strict";


app.controller("SaveNoteCtrl", function($scope, $http, MindFactory) {
	$scope.title = "Save Note";
	$scope.submitButtonText = "Save";
	$scope.newNote = {
		note: "",
		uid: ""
	};

	// $scope.addNewNote = function() {
	// 	console.log("add new")
	// 	MindFactory.postNewItem($scope.newNote)
	// 		.success(function(response) {
	// 			console.log("clicked");
	// 			$location.url("/home");
	// 		});
		
		
		
	// };
});
