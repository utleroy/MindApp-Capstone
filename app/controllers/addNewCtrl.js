app.controller("addNewCtrl", function($scope, $location, NotesFactory) {
	$scope.title = "New Note";
	$scope.submitButtonText = "Add New Item";
	$scope.newNote = {
		note: "",
		uid: ""
	};

	

	$scope.addNewNote = function() {
		NotesFactory.postNewNote($scope.newNote)
		.then(function someName(response) {
			$location.url("/userNotes");
			});
		};
	}
)