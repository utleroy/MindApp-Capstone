app.controller("formViewCtrl", function($scope, $http, $location, $routeParams, firebaseURL, NotesFactory) {
	$scope.formNotes = [];
	$scope.selectedItem = {};

	$scope.title = "Edit Note";
	$scope.submitButtonText = "Update";
	$scope.newNote = {};

	$http.get(firebaseURL + "/items.json")
	.success(function(itemObject) {
		var itemCollection = itemObject;
		Object.keys(itemCollection).forEach(function(key) {
			itemCollection[key].id = key;
			$scope.formNotes.push(itemCollection[key]);

			$scope.selectedItem = $scope.formNotes.filter(function(formNotes) {
				console.log("yippie", formNotes)
				return formNotes.id === $routeParams.itemId;
			}) [0];
		})
	})

	NotesFactory.getItemList($routeParams.itemId)
	.then(function successCallback(response) {
		$scope.newNote = response;
	});

	$scope.addNewNote = function() {
		NotesFactory.updateNote($routeParams.itemId, $scope.newNote)
		.then(function successCallback(response) {
			console.log("YEAH", response);
			$location.url("/home");
		})
	}


})
