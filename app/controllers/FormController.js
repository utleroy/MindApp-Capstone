"use strict";

app.controller('addNewCtrl', function($scope, $location, AuthFactory, NotesFactory) {
  $scope.title = "New Note";
  $scope.submitButtonText = "Add New";
  $scope.newNote = {
    note: "",
    uid: ""
  };

  $scope.addNewItem = function() {
    NotesFactory.newNote($scope.newNote)
    .then(function name (response) {
      console.log("boom", response);
      $location.url("/home");
    })
  }

    }


  

