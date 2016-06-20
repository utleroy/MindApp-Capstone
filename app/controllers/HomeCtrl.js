"use strict";


app.controller('HomeCtrl', function($scope, $location, NotesFactory) {
	$scope.list1 = {title: "Test - Drag Me"};
	console.log("list1");

	$scope.list2 = {};

	$scope.title = "New Note";
	$scope.submitButtonText = "Add New Note";
	$scope.newNote = {
		note: "",
		uid: ""
	};

	$scope.addNewNote = function() {
		console.log("add new")
		NotesFactory.postNewNote($scope.newNote)
			.then(function(response) {
				console.log("clicked");
				$location.url("/");
			});
		}
});
	





