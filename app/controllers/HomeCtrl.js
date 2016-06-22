"use strict";


app.controller('HomeCtrl', function($scope, $location, NotesFactory) {
	$scope.list1 = {title: "index.html"};
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
			});
		}


});
	





