app.controller("AddNewCtrl", function($scope, $http, NotesFactory) {
	$scope.title = "New Item";
	$scope.submitButtonText = "Add New Item";
	$scope.newNote = {
		note: "",
		uid: ""
	};

	$scope.addNewItem = function() {
		NotesFactory.postNewItem($scope.newTask)
			.success(function(response) {
				console.log("AddNewCtrl");
			});
		
		
		
	};
});
