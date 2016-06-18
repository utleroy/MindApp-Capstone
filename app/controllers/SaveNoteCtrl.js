"use strict";


app3.controller("SaveNoteCtrl", function($scope, $http, MindFactory) {
	$scope.title = "New Note";
	$scope.submitButtonText = "Add New Note";
	$scope.newNote = {
		note: "",
		uid: ""
	};

	$scope.addNewNote = function() {
		console.log("add new")
		MindFactory.postNewItem($scope.newNote)
			.success(function(response) {
				console.log("clicked");
				$location.url("/home");
			});
		
		
		
	};
});
