app.controller("FormCtrl", function ($scope, $http, firebaseURL) {
    
    $scope.isCollapsed = false;
    $scope.userData = {
        title: "",
        fieldNotes: ""
    };
    $scope.submitForm = function() {
        console.log("posting data....");
        $http.post(firebaseURL + "items + JSON", 
    		JSON.stringify(userData))
    			.success(function(userForm){
    				resolve(userForm);
    			});
    };
});
  
  

  // BUTTONS ======================
  
  // define some random object
  // $scope.bigData = {};
  
  // $scope.bigData.breakfast = false;
  // $scope.bigData.lunch = false;
  // $scope.bigData.dinner = false;
  
  // COLLAPSE =====================
  // $scope.isCollapsed = false;

