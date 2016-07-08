app.controller("formViewCtrl", function($scope, $http, $routeParams, firebaseURL, NotesFactory) {
	$scope.items = [];
	$scope.selectedItem = {};

	$http.get(firebaseURL + "/items.json")
	.success(function(itemObject) {
		var itemCollection = itemObject;
		Object.keys(itemCollection).forEach(function(key) {
			itemCollection[key].id = key;
			$scope.items.push(itemCollection[key]);

			$scope.selectedItem = $scope.items.filter(function(item) {
				return item.id === $routeParams.itemId;
			}) [0];
		})
	})
})
