app.controller("FormCtrl", function($scope, $location, $routeParams, NotesFactory) {
	$scope.title = "Edit Note";
	$scope.submitButtonText = "Update";
	$scope.updatedNote = {};

	NotesFactory.getSingleItem($routeParams.itemId)
	.then(function successCallback(response) {
		$scope.updatedNote = response;
	});

	$scope.addNewItem = function() {
		NotesFactory.updateNote($routeParams.itemId, $scope.updatedNote)
		.then(function successCallback(response) {
			console.log("YEAH", response);
			$location.url("/userNotes");
		})
	}
})
