"use strict";

app.factory("NotesFactory", function ($q, $http, firebaseURL, AuthFactory) {

  var getItemList = function(){
    var items = [];
    let user = AuthFactory.getUser();
    return $q(function(resolve, reject){
     $http.get(`${firebaseURL}items.json?orderBy="uid"&equalTo="${user.uid}"`)
     .success(function(itemObject){
       var itemCollection = itemObject;
       Object.keys(itemCollection).forEach(function(key){
        itemCollection[key].id=key;
        items.push(itemCollection[key]);
      });
       resolve(items);
     })
     .error(function(error){
       reject(error);
     });
   });
  };
  
  var deleteItem = function(itemId){
    return $q(function(resolve, reject){
      $http
      .delete(firebaseURL + "items/" + itemId + ".json")
      .success(function(objectFromFirebase){
        resolve(objectFromFirebase);
      });
    });
  };
  
  var postNewNote = function(newNote){
    let user = AuthFactory.getUser();
    console.log(user, "user activity")
    return $q(function(resolve, reject) {
      $http.post(
        firebaseURL + "items.json",
        JSON.stringify({
          note: newNote,
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




  return {postNewNote:postNewNote, deleteItem:deleteItem, getItemList:getItemList};

});

