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

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
