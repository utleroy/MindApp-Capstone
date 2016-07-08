"use strict";


app.controller("HomeCtrl", function($scope, $location, $http, NotesFactory) {


	$scope.items = [];

	$scope.newNote = "";

	$scope.userNotes = [];

	$scope.newTool = "";

	$scope.userTools = [];

	NotesFactory.getItemList().then(function(itemCollection){
		$scope.userNotes.userTools = itemCollection;
	});

	$scope.itemDelete = function(itemId){
		console.log("itemId", itemId);
		NotesFactory.deleteItem(itemId).then(function(response){
			NotesFactory.getItemList().then(function(itemCollection){
				$scope.userNotes = itemCollection;
				console.log("deleted clicked")
			});
		});
	};

	$scope.addNewNote = function() {
		NotesFactory.postNewNote($scope.newNote)
		.then(function(response) {
			NotesFactory.getItemList().then(function(itemCollection){
				$scope.userNotes = itemCollection;
			});
		});
	}

	// $scope.addNewTool = function(newTool) {
	// 	NotesFactory.postNewMindTool($scope.newTool)
	// 	.then(function(response) {
	// 		NotesFactory.getItemList().then(function(itemCollection) {
	// 			$scope.userTools = itemCollection;
	// 		})
	// 	})
	// }

});

