"use strict";


app.controller("HomeCtrl", function($scope, $location, $http, $sce, NotesFactory) {



	$scope.title = "New Tool";
	$scope.buttonText = "Add Tool";
	$scope.userTools = [];

	$scope.newTool = "";
	$scope.tool1 = false;
 


	$scope.title = "New Note";
  $scope.submitButtonText = "Add New";
  $scope.newNote = {
    note: "",
    uid: ""
  };

	NotesFactory.getItemList().then(function(itemCollection){
		$scope.userNotes = itemCollection;
	});

	NotesFactory.getItemList().then(function(itemCollection){
		$scope.userTools = itemCollection;
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
		.then(function someName(response) {
			$location.url("/home");
			});
		};

	$scope.addNewTool = function(newTool) {
		NotesFactory.postNewMindTool($scope.newTool)
		.then(function(response) {
			NotesFactory.getItemList().then(function(itemCollection) {
				$scope.userTools = itemCollection;
			})
		})
	}


        // $scope.renderHtml = function (htmlCode) {
        //     return $sce.trustAsHtml(htmlCode);
        // };

        // $scope.body = '<div style="width:200px; height:200px; border:1px solid blue;"></div>'; 


	})

