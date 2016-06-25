"use strict";

app.controller('FormController', function($scope, AuthFactory, NotesFactory) {
    var formList = this;
    formList.forms = [];

    NotesFactory.getItemList().then(function(itemCollection){
    $scope.items = itemCollection;
  });
 
    formList.addForm = function() {
      formList.forms.push({text:formList.formText, done:false});
      formList.formText = '';
    };
 
    formList.remaining = function() {
      var count = 0;
      angular.forEach(formList.forms, function(form) {
        count += form.done ? 0 : 1;
      });
      return count;
    };
 
    formList.archive = function() {
      var oldForms = formList.forms;
      formList.forms = [];
      angular.forEach(oldForms, function(form) {
        if (!form.done) formList.forms.push(form);
      });
    };
  });


  

