"use strict";


app.controller("HomeCtrl", function($scope, $location, $http, NotesFactory) {


	$scope.items = [];

	$scope.title = "New Note";
	$scope.submitButtonText = "Add New Note";
	$scope.newNote = {
		note: "",
		uid: ""
	};

	// $scope.display = function() {
	// 		itemStorage.getItemList().then(function(data) {
	// 			$scope.items = data;
	// 			console.log(data);
	// 		});
	// 	}
	// }
	// $scope.display();


	NotesFactory.getItemList().then(function(itemCollection){
		$scope.items = itemCollection;
	});


	$scope.itemDelete = function(itemId){
		NotesFactory.deleteItem(itemId).then(function(response){
			NotesFactory.getItemList().then(function(itemCollection){
				$scope.items = itemCollection;
				console.log("deleted clicked")
			});
		});
	};

	$scope.addNewNote = function() {
		console.log("add new")
		NotesFactory.postNewNote($scope.newNote)
		.then(function(response) {
		});
	}

})


























// 		$scope.userNote = function($scope){
//     $scope.MakeVisible=!$scope.MakeVisible; 
// $scope.showAddNoteBtn=true;	
// $scope.userText='';
// $scope.Test='';
// $scope.MakeVisible=false;
//     $scope.addNoteBtnClicked=function(){
// 	$scope.Test='';
// 	$scope.MakeVisible=true;
// 	$scope.showAddNoteBtn=false;
// }
//     $scope.cancel=function(){
// 	$scope.MakeVisible=false;
// 	$scope.showAddNoteBtn=true;
// }

//    $scope.commentArray = [];    // array for storing comments

//     $scope.Submit=function(){
// 	$scope.commentArray.push($scope.Test);     // add a comment to the array after user submit the comment
// 	$scope.MakeVisible=false;
// 	$scope.showAddNoteBtn=true;
// }


// });






