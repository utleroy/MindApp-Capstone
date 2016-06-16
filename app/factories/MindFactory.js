'use strict';
app.factory("mindStorage", function($q, $http, firebaseURL, AuthFactory){

var mindItem = function(newItem){
    return $q(function(resolve, reject) {
      $http.post(
        firebaseURL + "thing.json",
        JSON.stringify({
          D0: newItem.D0,
          uid: user.uid
        })
        )
      .success(
        function(objectFromFirebase) {
          resolve(objectFromFirebase);
        }
        );
    });
  }
});

var addFileToRoot = function(addedObject) {
	console.log(addedObject);
}