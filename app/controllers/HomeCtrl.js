"use strict";


app3.controller('HomeCtrl', function($scope, NotesFactory) {
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
			.success(function(response) {
				console.log("clicked");
				$location.url("/home");
			});
		}
});






